import { convertToInches, convertToPounds } from "../helpers";
import type { Pokemon, PokemonResult } from "../types";
import getPokemonData from "./getPokemonData";
import getPokemonDescription from "./getPokemonDescription";

/**
 * settlePokemonData maps over the result of pokemon from the initial request and
 * gets the pokemon data and description to populate the JSON file.
 * @param {PokemonResult[]} results - The response from the intial API GET request
 * @returns A promise to settle the results with the Pokemon type
 */
export default async function settlePokemonData(results: PokemonResult[]): Promise<PromiseSettledResult<Pokemon>[]> {
  try {
    const pokemon = await Promise.allSettled(results.map(async (pkmn: PokemonResult) => {
      const pokemonData = await getPokemonData(pkmn.url);
      const pokemonDescription = await getPokemonDescription(pokemonData.description_url);

      const result: Pokemon = {
        name: pokemonData.name,
        pokedex_number: pokemonData.pokedex_number,
        height: convertToInches(pokemonData.height),
        weight: convertToPounds(pokemonData.weight),
        sprite: pokemonData.sprite,
        shape: pokemonDescription.shape,
        color: pokemonDescription.color,
        types: pokemonData.types,
        description: pokemonDescription.description
      }
      return result;
    }));

    return pokemon
  } catch(err) {
    return err
  }
}