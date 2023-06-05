import { getPokemonData } from "../pokemon";

describe("getPokemonData", () => {
  it("successfully gets data for Bulbasaur", async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/1/";

    const result = await getPokemonData(url);
    expect(result).toHaveProperty("name", "bulbasaur");
    expect(result.types).toContain("grass");
  });

  it("throws an error for a bad url", async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/12345/";

    const result = await getPokemonData(url);
    expect(result).toBeInstanceOf(Error);
  });
});