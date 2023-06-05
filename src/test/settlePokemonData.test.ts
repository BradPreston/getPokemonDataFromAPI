import axios from "axios";
import type { Pokemon, PokemonResult } from "../types";
import { settlePokemonData } from "../pokemon";

describe("settlePokemonData", () => {
  let pokemonResults: PokemonResult[];

  beforeEach(async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5");
    pokemonResults = await res.data.results;
  });

  it("contains an object for Venusaur in Pokemon array", async () => {
    const pokemon = await settlePokemonData(pokemonResults);
    let containsVenusaur = false;
    // pokemon should come back in numerical order, 
    // but in case it doesn't, a forEach loop will verify that
    // the value exists.
    pokemon.forEach(({value}: PromiseFulfilledResult<Pokemon>) => {
      if (value.name === "venusaur") containsVenusaur = true;
    });
    expect(containsVenusaur).toBe(true);
  });

  it("has a length of 5 via the limit parameter", async () => {
    const pokemon = await settlePokemonData(pokemonResults);
    expect(pokemon).toHaveLength(5);
  });

  it("returns an error using an improper url", async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/version/1");
    // I realize using any is bad practice, but I didn't want to make a whole
    // custom type for the response of this request. In this case, any works fine
    // because the url is valid for the pokeapi endpoint, but invalid for the data
    // that settlePokemonData expects.
    const pokemonResults: any[] = await res.data.results;
    const pokemon = await settlePokemonData(pokemonResults);
    expect(pokemon).toBeInstanceOf(Error)
  })
});