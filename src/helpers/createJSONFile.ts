import type { Pokemon } from "../types";
import fs from "fs";

/**
 * createJSONFile takes in an array of settled results of the Pokemon type and saves the results to 
 * a JSON file
 * @param {PromiseSettledResult<Pokemon>[]} pkmn - Array of settled promise results of the Pokemon type
 * @param {string} filename - The name of the JSON file to save the results to
 */
export default function createJSONFile(pkmn: PromiseSettledResult<Pokemon>[], filename: string) {
  pkmn.forEach(({value}: PromiseFulfilledResult<Pokemon>) => {
    const file = fs.readFileSync(filename);
      
    if (file.length === 0) {
      // if the file is empty, write to the file first
      fs.writeFileSync(filename, JSON.stringify([value]));
    } else {
      // otherwise, parse the data and append to it. Then write back into the file
      const json = JSON.parse(file.toString());
      json.push(value);
      fs.writeFileSync(filename, JSON.stringify(json));
    }
  });
}