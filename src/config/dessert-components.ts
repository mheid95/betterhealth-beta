interface Macros {
  calories: number
  protein: number
  carbs: number
  fat: number
}

interface SizeOption {
  pieces: number
  macros: Macros
}

interface DessertComponent {
  name: string
  sizes: {
    normal: SizeOption
    big: SizeOption
  }
}

export const DESSERTS: Record<string, DessertComponent> = {
  carrot_muffin: {
    name: "Carrot Muffin",
    sizes: {
      normal: {
        pieces: 4,
        macros: {
          calories: 81,
          protein: 4.5,
          carbs: 10.1,
          fat: 2.6
        }
      },
      big: {
        pieces: 9,
        macros: {
          calories: 81,
          protein: 4.5,
          carbs: 10.1,
          fat: 2.6
        }
      }
    }
  },
  chocolate_muffin: {
    name: "Chocolate Muffin",
    sizes: {
      normal: {
        pieces: 4,
        macros: {
          calories: 91,
          protein: 4.5,
          carbs: 10.1,
          fat: 4.0
        }
      },
      big: {
        pieces: 9,
        macros: {
          calories: 91,
          protein: 4.5,
          carbs: 10.1,
          fat: 4.0
        }
      }
    }
  },
  protein_waffle: {
    name: "Protein Waffle",
    sizes: {
      normal: {
        pieces: 4,
        macros: {
          calories: 104,
          protein: 5.3,
          carbs: 11.6,
          fat: 3.91
        }
      },
      big: {
        pieces: 9,
        macros: {
          calories: 104,
          protein: 5.3,
          carbs: 11.6,
          fat: 3.91
        }
      }
    }
  }
}

// Helper function to calculate total macros for dessert portions
export function calculateDessertMacros(
  dessertId: keyof typeof DESSERTS,
  size: 'normal' | 'big'
): Macros {
  const dessert = DESSERTS[dessertId]
  const pieces = dessert.sizes[size].pieces
  const baseMacros = dessert.sizes[size].macros

  return {
    calories: baseMacros.calories * pieces,
    protein: baseMacros.protein * pieces,
    carbs: baseMacros.carbs * pieces,
    fat: baseMacros.fat * pieces
  }
} 