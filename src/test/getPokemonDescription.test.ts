import { getPokemonData, getPokemonDescription } from "../pokemon";

describe("getPokemonDescription", () => {
  it("successfully gets the description data for Bulbasaur", async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/1/";
    const bulbasaurData = await getPokemonData(url);

    const descriptionData = await getPokemonDescription(bulbasaurData.description_url);
    expect(descriptionData).toHaveProperty("id", 1);
  });
});