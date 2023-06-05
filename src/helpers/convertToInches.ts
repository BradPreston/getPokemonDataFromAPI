/**
 * Converts meters to inches
 * @param {number} height - The height in meters without decimal place
 * @returns The height converted into inches
 */
export default function convertToInches(height: number): number {
  // Pokeapi sets meters without decimal places, so I convert to a 1 place decimal number by dividing by 10.
  // This gives me results in meters that are accurate to the official Pokedex.
  const inches = (height / 10) * 39.37;
  return parseFloat(Math.round(inches).toFixed(1));
}