interface Macros {
  calories: number
  protein: number
  carbs: number
  fat: number
}

interface SizeOption {
  volume?: string
  pieces?: number
  macros: Macros
}

interface ProductComponent {
  name: string
  sizes: {
    normal: SizeOption
    big: SizeOption
  }
}

// Desserts Configuration
export const DESSERTS: Record<string, ProductComponent> = {
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

// Drinks Configuration
export const DRINKS: Record<string, ProductComponent> = {
  kefir: {
    name: "Kefir",
    sizes: {
      normal: {
        volume: "350ml",
        macros: {
          calories: 160,
          protein: 2,
          carbs: 38,
          fat: 0
        }
      },
      big: {
        volume: "1L",
        macros: {
          calories: 450,
          protein: 6,
          carbs: 108,
          fat: 0
        }
      }
    }
  },
  kombucha: {
    name: "Kombucha",
    sizes: {
      normal: {
        volume: "350ml",
        macros: {
          calories: 160,
          protein: 2,
          carbs: 38,
          fat: 0
        }
      },
      big: {
        volume: "1L",
        macros: {
          calories: 450,
          protein: 6,
          carbs: 108,
          fat: 0
        }
      }
    }
  },
  orange_juice: {
    name: "Orange Juice",
    sizes: {
      normal: {
        volume: "350ml",
        macros: {
          calories: 160,
          protein: 2,
          carbs: 38,
          fat: 0
        }
      },
      big: {
        volume: "1L",
        macros: {
          calories: 450,
          protein: 6,
          carbs: 108,
          fat: 0
        }
      }
    }
  }
}

// Fermented Foods Configuration
export const FERMENTED_FOODS: Record<string, ProductComponent> = {
  white_cabbage: {
    name: "White Cabbage",
    sizes: {
      normal: {
        volume: "400ml",
        macros: {
          calories: 80, // 20 kcal * 4
          protein: 5.2, // 1.3g * 4
          carbs: 16, // 4g * 4
          fat: 0.4 // 0.1g * 4
        }
      },
      big: {
        volume: "900ml",
        macros: {
          calories: 180, // 20 kcal * 9
          protein: 11.7, // 1.3g * 9
          carbs: 36, // 4g * 9
          fat: 0.9 // 0.1g * 9
        }
      }
    }
  },
  red_cabbage: {
    name: "Red Cabbage",
    sizes: {
      normal: {
        volume: "400ml",
        macros: {
          calories: 100, // 25 kcal * 4
          protein: 6, // 1.5g * 4
          carbs: 20, // 5g * 4
          fat: 0.8 // 0.2g * 4
        }
      },
      big: {
        volume: "900ml",
        macros: {
          calories: 225, // 25 kcal * 9
          protein: 13.5, // 1.5g * 9
          carbs: 45, // 5g * 9
          fat: 1.8 // 0.2g * 9
        }
      }
    }
  },
  carrots: {
    name: "Fermented Carrots",
    sizes: {
      normal: {
        volume: "400ml",
        macros: {
          calories: 144, // 36 kcal * 4
          protein: 4.8, // 1.2g * 4
          carbs: 32, // 8g * 4
          fat: 0.8 // 0.2g * 4
        }
      },
      big: {
        volume: "900ml",
        macros: {
          calories: 324, // 36 kcal * 9
          protein: 10.8, // 1.2g * 9
          carbs: 72, // 8g * 9
          fat: 1.8 // 0.2g * 9
        }
      }
    }
  },
  kimchi: {
    name: "Kimchi",
    sizes: {
      normal: {
        volume: "400ml",
        macros: {
          calories: 108, // 27 kcal * 4
          protein: 5.2, // 1.3g * 4
          carbs: 21.2, // 5.3g * 4
          fat: 1.2 // 0.3g * 4
        }
      },
      big: {
        volume: "900ml",
        macros: {
          calories: 243, // 27 kcal * 9
          protein: 11.7, // 1.3g * 9
          carbs: 47.7, // 5.3g * 9
          fat: 2.7 // 0.3g * 9
        }
      }
    }
  },
  sriracha: {
    name: "Sriracha",
    sizes: {
      normal: {
        volume: "400ml",
        macros: {
          calories: 180, // 45 kcal * 4
          protein: 8, // 2g * 4
          carbs: 36, // 9g * 4
          fat: 1.6 // 0.4g * 4
        }
      },
      big: {
        volume: "900ml",
        macros: {
          calories: 405, // 45 kcal * 9
          protein: 18, // 2g * 9
          carbs: 81, // 9g * 9
          fat: 3.6 // 0.4g * 9
        }
      }
    }
  },
  sourdough_protein_bread: {
    name: "Sourdough Protein Bread",
    sizes: {
      normal: {
        volume: "600g",
        macros: {
          calories: 1578, // 263 kcal * 6
          protein: 72.6, // 12.1g * 6
          carbs: 232.8, // 38.8g * 6
          fat: 27.6 // 4.6g * 6
        }
      },
      big: {
        volume: "600g", // Same as normal since there's no big size
        macros: {
          calories: 1578, // 263 kcal * 6
          protein: 72.6, // 12.1g * 6
          carbs: 232.8, // 38.8g * 6
          fat: 27.6 // 4.6g * 6
        }
      }
    }
  }
}

// Helper functions to calculate total macros
export function calculateDessertMacros(
  dessertId: keyof typeof DESSERTS,
  size: 'normal' | 'big'
): Macros {
  const dessert = DESSERTS[dessertId]
  const pieces = dessert.sizes[size].pieces!
  const baseMacros = dessert.sizes[size].macros

  return {
    calories: baseMacros.calories * pieces,
    protein: baseMacros.protein * pieces,
    carbs: baseMacros.carbs * pieces,
    fat: baseMacros.fat * pieces
  }
}

export function getDrinkMacros(
  drinkId: keyof typeof DRINKS,
  size: 'normal' | 'big'
): Macros {
  return DRINKS[drinkId].sizes[size].macros
}

export function getFermentMacros(
  fermentId: keyof typeof FERMENTED_FOODS,
  size: 'normal' | 'big'
): Macros {
  return FERMENTED_FOODS[fermentId].sizes[size].macros
} 