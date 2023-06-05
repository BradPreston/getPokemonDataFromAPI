import type { PokemonData, Type } from "../types";
import axios from "axios"

/** 
 * getPokemonData takes the url passed from a PokemonResult object and grabs the pokedex_number,
 * name, height, weight, sprite, types, and description_url from the response.
 */
export default async function getPokemonData(url: string): Promise<PokemonData> {
  try {
    const res = await axios.get(url);
    const data = await res.data;

    return {
      pokedex_number: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      sprite: data.sprites.other["official-artwork"].front_default,
      types: data.types.map((t: Type) => t.type.name),
      description_url: data.species.url
    }
  } catch(err) {
    return err
  }
}