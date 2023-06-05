import axios from "axios";
import fs from "fs";
import { Pokemon } from "../types";
import { settlePokemonData } from "../pokemon";
import createJSONFile from "../helpers/createJSONFile";

describe("createJSONFile", () => {
  let pokemon: PromiseSettledResult<Pokemon>[];
  const filename = "src/test/test-data/test.json";
  let json: Pokemon[];

  beforeAll(async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5")
    const pokemonResults = await res.data.results;
    pokemon = await settlePokemonData(pokemonResults);
  });

  beforeEach(async () => {
    // empty the file first
    fs.writeFileSync(filename, "");
    // populate the file with data
    createJSONFile(pokemon, filename);
    // open the file to read
    const file = fs.readFileSync(filename);
    // parse the file into an object
    json = JSON.parse(file.toString());
  })

  it(`appends 5 pokemon to ${filename}`, async () => {
    expect(json).toHaveLength(5);
  });

  it(`contains Charmander in ${filename}`, async () => {
    let containsCharmander = false;
    // pokemon in json should come back in numerical order, 
    // but in case they don't, a for-of loop will verify that
    // the value exists.
    for (let pkmn of json) {
      if (pkmn.name === "charmander") containsCharmander = true;
    }
    expect(containsCharmander).toBe(true);
  });
});