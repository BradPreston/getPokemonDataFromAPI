/**
 * Converts kilograms to pounds
 * @param {number} weight - The weight in kilograms
 * @returns The weight converted into pounds
 */
export default function convertToPounds(weight: number): number {
  // Pokeapi sets kilograms without decimal places, so I convert to a 1 place decimal number by dividing by 10.
  // This gives me results in kilograms that are accurate to the official Pokedex.
  const pounds = (weight / 10) * 2.205;
  return parseFloat(pounds.toFixed(1));
}