export type Pokemon = {
  name: string
  pokedex_number: number
  height: number
  weight: number
  sprite: string
  color: string
  shape: string
  types: string[]
  description: string
}

export type PokemonResult = {
  name: string
  url: string
}

export type PokemonData = {
  pokedex_number: number
  name: string
  height: number
  weight: number
  sprite: string
  types: string[]
  description_url: string
}

export type DescriptionData = {
  id: number
  color: string
  shape: string
  description: string
}

export type DescriptionEntry = {
  flavor_text: string
  language: {
    name: string
    url: string
  }
  version: {
    name: string
    url: string
  }
}

export type Type = {
  slot: number
  type: {
    name: string
    url: string
  }
}