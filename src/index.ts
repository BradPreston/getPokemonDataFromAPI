import axios from "axios";
import type { PokemonResult } from "./types";
import { settlePokemonData } from "./pokemon";
import createJSONFile from "./helpers/createJSONFile";

/**
 * getPokemonDataFromAPI grabs the information I want from the pokeapi v2 API
 * to make a JSON file that will populate a database
 */
async function getPokemonDataFromAPI() {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokemonResults: PokemonResult[] = await res.data.results;
    const pokemon = await settlePokemonData(pokemonResults);
    createJSONFile(pokemon, "pokemon.json");
  } catch(err) {
    console.log(err);
  }
}
getPokemonDataFromAPI();