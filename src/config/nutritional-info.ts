export interface Macros {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

interface BowlSize {
  readonly macros: Macros;
  readonly portion: string;
}

interface Bowl {
  readonly normal: BowlSize;
  readonly big?: BowlSize;
}

export const NUTRITION = {
  bowls: {
    salmon_bowl: {
      normal: {
        macros: {
          calories: 750,
          protein: 55,
          carbs: 65,
          fat: 35,
          fiber: 8
        },
        portion: "350g (150g protein rice, 150g salmon, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1200,
          protein: 90,
          carbs: 105,
          fat: 55,
          fiber: 12
        },
        portion: "570g (250g protein rice, 250g salmon, 70g veggies)"
      }
    },
    budget_bowl: {
      normal: {
        macros: {
          calories: 650,
          protein: 45,
          carbs: 65,
          fat: 22,
          fiber: 8
        },
        portion: "350g (150g protein rice, 150g chicken, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1050,
          protein: 75,
          carbs: 105,
          fat: 35,
          fiber: 12
        },
        portion: "570g (250g protein rice, 250g chicken, 70g veggies)"
      }
    },
    t_bone_bowl: {
      normal: {
        macros: {
          calories: 950,
          protein: 85,
          carbs: 65,
          fat: 45,
          fiber: 8
        },
        portion: "620g (200g protein rice, 350g T-Bone steak, 70g veggies)"
      }
    },
    organic_quinoa: {
      normal: {
        macros: {
          calories: 550,
          protein: 25,
          carbs: 55,
          fat: 28,
          fiber: 12
        },
        portion: "200g quinoa salad with veggies & 3 organic eggs"
      },
      big: {
        macros: {
          calories: 850,
          protein: 40,
          carbs: 85,
          fat: 45,
          fiber: 18
        },
        portion: "300g quinoa salad with veggies & 5 organic eggs"
      }
    },
    organic_breakfast: {
      normal: {
        macros: {
          calories: 350,
          protein: 22,
          carbs: 12,
          fat: 25,
          fiber: 6
        },
        portion: "150g cucumber, 3 eggs, 30g fermented veggies"
      },
      big: {
        macros: {
          calories: 550,
          protein: 35,
          carbs: 18,
          fat: 40,
          fiber: 10
        },
        portion: "250g cucumber, 5 eggs, 50g fermented veggies"
      }
    },
    pulled_beef: {
      normal: {
        macros: {
          calories: 750,
          protein: 55,
          carbs: 65,
          fat: 35,
          fiber: 8
        },
        portion: "350g (150g protein rice, 150g beef, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1200,
          protein: 90,
          carbs: 105,
          fat: 55,
          fiber: 12
        },
        portion: "570g (250g protein rice, 250g beef, 70g veggies)"
      }
    },
    pulled_chicken: {
      normal: {
        macros: {
          calories: 650,
          protein: 45,
          carbs: 65,
          fat: 22,
          fiber: 8
        },
        portion: "350g (150g protein rice, 150g chicken, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1050,
          protein: 75,
          carbs: 105,
          fat: 35,
          fiber: 12
        },
        portion: "570g (250g protein rice, 250g chicken, 70g veggies)"
      }
    },
    chicken_coconut_curry: {
      normal: {
        macros: {
          calories: 750,
          protein: 45,
          carbs: 65,
          fat: 35,
          fiber: 8
        },
        portion: "350g (150g protein rice, 150g chicken, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1200,
          protein: 75,
          carbs: 105,
          fat: 55,
          fiber: 12
        },
        portion: "570g (250g protein rice, 250g chicken, 70g veggies)"
      }
    },
    butter_lemon_shrimp: {
      normal: {
        macros: {
          calories: 650,
          protein: 45,
          carbs: 65,
          fat: 22,
          fiber: 8
        },
        portion: "325g (150g protein rice, 125g shrimp, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1050,
          protein: 75,
          carbs: 105,
          fat: 35,
          fiber: 12
        },
        portion: "545g (250g protein rice, 225g shrimp, 70g veggies)"
      }
    },
    surf_and_turf: {
      normal: {
        macros: {
          calories: 850,
          protein: 65,
          carbs: 65,
          fat: 35,
          fiber: 8
        },
        portion: "420g (150g protein rice, 150g beef, 70g shrimp, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1350,
          protein: 105,
          carbs: 105,
          fat: 55,
          fiber: 12
        },
        portion: "680g (250g protein rice, 250g beef, 110g shrimp, 70g veggies)"
      }
    }
  },

  // DESSERTS
  desserts: {
    protein_waffle: {
      normal: {
        macros: {
          calories: 320,
          protein: 18,
          carbs: 28,
          fat: 16,
          fiber: 3
        },
        portion: "4 waffles"
      },
      big: {
        macros: {
          calories: 720,
          protein: 40,
          carbs: 63,
          fat: 36,
          fiber: 7
        },
        portion: "9 waffles"
      }
    },
    carrot_muffin: {
      normal: {
        macros: {
          calories: 280,
          protein: 16,
          carbs: 32,
          fat: 12,
          fiber: 4
        },
        portion: "4 muffins"
      },
      big: {
        macros: {
          calories: 630,
          protein: 36,
          carbs: 72,
          fat: 27,
          fiber: 9
        },
        portion: "9 muffins"
      }
    },
    chocolate_muffin: {
      normal: {
        macros: {
          calories: 300,
          protein: 18,
          carbs: 30,
          fat: 14,
          fiber: 5
        },
        portion: "4 muffins"
      },
      big: {
        macros: {
          calories: 675,
          protein: 40,
          carbs: 68,
          fat: 32,
          fiber: 11
        },
        portion: "9 muffins"
      }
    }
  },

  // DRINKS
  drinks: {
    orange_juice: {
      normal: {
        macros: {
          calories: 160,
          protein: 2,
          carbs: 38,
          fat: 0,
          fiber: 0
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 450,
          protein: 6,
          carbs: 108,
          fat: 0,
          fiber: 0
        },
        portion: "1L"
      }
    },
    kefir: {
      normal: {
        macros: {
          calories: 120,
          protein: 8,
          carbs: 12,
          fat: 6,
          fiber: 0
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 340,
          protein: 23,
          carbs: 34,
          fat: 17,
          fiber: 0
        },
        portion: "1L"
      }
    },
    kombucha: {
      normal: {
        macros: {
          calories: 35,
          protein: 0,
          carbs: 8,
          fat: 0,
          fiber: 0
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 100,
          protein: 0,
          carbs: 23,
          fat: 0,
          fiber: 0
        },
        portion: "1L"
      }
    },
    electrolyte_lemonade: {
      normal: {
        macros: {
          calories: 45,
          protein: 0,
          carbs: 11,
          fat: 0,
          fiber: 0
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 130,
          protein: 0,
          carbs: 31,
          fat: 0,
          fiber: 0
        },
        portion: "1L"
      }
    },
    raw_milk: {
      normal: {
        macros: {
          calories: 150,
          protein: 8,
          carbs: 12,
          fat: 8,
          fiber: 0
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 430,
          protein: 23,
          carbs: 34,
          fat: 23,
          fiber: 0
        },
        portion: "1L"
      }
    }
  },

  // FERMENTED FOODS
  fermented_foods: {
    sourdough_protein_bread: {
      normal: {
        macros: {
          calories: 1500,
          protein: 90,
          carbs: 240,
          fat: 15,
          fiber: 24
        },
        portion: "600g"
      }
    },
    white_cabbage: {
      normal: {
        macros: {
          calories: 25,
          protein: 1,
          carbs: 5,
          fat: 0,
          fiber: 3
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 56,
          protein: 2,
          carbs: 11,
          fat: 0,
          fiber: 7
        },
        portion: "900ml"
      }
    },
    red_cabbage: {
      normal: {
        macros: {
          calories: 25,
          protein: 1,
          carbs: 5,
          fat: 0,
          fiber: 3
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 56,
          protein: 2,
          carbs: 11,
          fat: 0,
          fiber: 7
        },
        portion: "900ml"
      }
    },
    carrots: {
      normal: {
        macros: {
          calories: 35,
          protein: 1,
          carbs: 8,
          fat: 0,
          fiber: 2
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 79,
          protein: 2,
          carbs: 18,
          fat: 0,
          fiber: 5
        },
        portion: "900ml"
      }
    },
    kimchi: {
      normal: {
        macros: {
          calories: 45,
          protein: 2,
          carbs: 9,
          fat: 0,
          fiber: 4
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 101,
          protein: 5,
          carbs: 20,
          fat: 0,
          fiber: 9
        },
        portion: "900ml"
      }
    },
    sriracha: {
      normal: {
        macros: {
          calories: 90,
          protein: 2,
          carbs: 18,
          fat: 1,
          fiber: 2
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 203,
          protein: 5,
          carbs: 41,
          fat: 2,
          fiber: 5
        },
        portion: "900ml"
      }
    }
  }
} as const

export function getBowlMacros(bowlType: keyof typeof NUTRITION.bowls, size: 'normal' | 'big'): Macros {
  const bowl = NUTRITION.bowls[bowlType] as Bowl
  if (!bowl[size]) {
    throw new Error(`Size ${size} not available for ${bowlType}`)
  }
  return bowl[size]!.macros
}

export function getDessertMacros(dessertType: keyof typeof NUTRITION.desserts, size: 'normal' | 'big'): Macros {
  const dessert = NUTRITION.desserts[dessertType] as Bowl
  if (!dessert[size]) {
    throw new Error(`Size ${size} not available for ${dessertType}`)
  }
  return dessert[size]!.macros
}

export function getDrinkMacros(drinkType: keyof typeof NUTRITION.drinks, size: 'normal' | 'big'): Macros {
  const drink = NUTRITION.drinks[drinkType] as Bowl
  if (!drink[size]) {
    throw new Error(`Size ${size} not available for ${drinkType}`)
  }
  return drink[size]!.macros
}

export function getFermentedFoodMacros(fermentedFoodType: keyof typeof NUTRITION.fermented_foods, size: 'normal' | 'big'): Macros {
  const fermentedFood = NUTRITION.fermented_foods[fermentedFoodType] as Bowl
  if (!fermentedFood[size]) {
    throw new Error(`Size ${size} not available for ${fermentedFoodType}`)
  }
  return fermentedFood[size]!.macros
}

export function getBowlPortion(bowlType: keyof typeof NUTRITION.bowls, size: 'normal' | 'big'): string {
  const bowl = NUTRITION.bowls[bowlType] as Bowl
  if (!bowl[size]) {
    throw new Error(`Size ${size} not available for ${bowlType}`)
  }
  return bowl[size]!.portion
}

export { getFermentedFoodMacros as getFermentMacros } 