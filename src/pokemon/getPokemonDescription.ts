import axios from "axios";
import type { DescriptionData, DescriptionEntry } from "../types";

/** 
 * getPokemonDescription takes the description_url passed from a PokemonData object and grabs the id,
 * color, shape, and description from the response.
 */
export default async function getPokemonDescription(description_url: string): Promise<DescriptionData> {
  try {
    const res = await axios.get(description_url);
    const data = await res.data;

    // index finds the index of the flavor text with the version name red and language name en
    const index = res.data.flavor_text_entries.findIndex((entry: DescriptionEntry) => {
      return entry.version.name === "red" && entry.language.name === "en";
    });

    const description = data.flavor_text_entries[index].flavor_text
                        .replaceAll("\n", " ")
                        .replaceAll("\f", " ");

    return {
      id: data.id,
      color: data.color.name,
      shape: data.shape.name,
      description: description
    }
  } catch (err) {
    return err;
  }
}