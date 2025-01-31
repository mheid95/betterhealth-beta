import { MENU } from './menu-prices'

export interface Macros {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
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
          fat: 35
        },
        portion: "350g (150g protein rice, 150g salmon, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1200,
          protein: 90,
          carbs: 105,
          fat: 55
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
          fat: 22
        },
        portion: "350g (150g protein rice, 150g chicken, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1050,
          protein: 75,
          carbs: 105,
          fat: 35
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
          fat: 45
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
          fat: 28
        },
        portion: "200g quinoa salad with veggies & 3 organic eggs"
      },
      big: {
        macros: {
          calories: 850,
          protein: 40,
          carbs: 85,
          fat: 45
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
          fat: 25
        },
        portion: "150g cucumber, 3 eggs, 30g fermented veggies"
      },
      big: {
        macros: {
          calories: 550,
          protein: 35,
          carbs: 18,
          fat: 40
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
          fat: 35
        },
        portion: "350g (150g protein rice, 150g beef, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1200,
          protein: 90,
          carbs: 105,
          fat: 55
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
          fat: 22
        },
        portion: "350g (150g protein rice, 150g chicken, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1050,
          protein: 75,
          carbs: 105,
          fat: 35
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
          fat: 35
        },
        portion: "350g (150g protein rice, 150g chicken, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1200,
          protein: 75,
          carbs: 105,
          fat: 55
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
          fat: 22
        },
        portion: "325g (150g protein rice, 125g shrimp, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1050,
          protein: 75,
          carbs: 105,
          fat: 35
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
          fat: 35
        },
        portion: "420g (150g protein rice, 150g beef, 70g shrimp, 50g veggies)"
      },
      big: {
        macros: {
          calories: 1350,
          protein: 105,
          carbs: 105,
          fat: 55
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
          calories: 96 * 4,    // 384 cal (4 waffles)
          protein: 6 * 4,      // 24g protein
          carbs: 11 * 4,       // 44g carbs
          fat: 4 * 4,          // 16g fat
        },
        portion: "4 protein waffles"
      },
      big: {
        macros: {
          calories: 96 * 9,    // 864 cal (9 waffles)
          protein: 6 * 9,      // 54g protein
          carbs: 11 * 9,       // 99g carbs
          fat: 4 * 9,          // 36g fat
        },
        portion: "9 protein waffles"
      }
    },
    carrot_protein_muffin: {
      normal: {
        macros: {
          calories: 81 * 4,    // 324 cal (4 muffins)
          protein: 4.5 * 4,    // 18g protein
          carbs: 10.1 * 4,     // 40.4g carbs
          fat: 2.6 * 4,        // 10.4g fat
        },
        portion: "4 protein muffins"
      },
      big: {
        macros: {
          calories: 81 * 9,    // 729 cal (9 muffins)
          protein: 4.5 * 9,    // 40.5g protein
          carbs: 10.1 * 9,     // 90.9g carbs
          fat: 2.6 * 9,        // 23.4g fat
        },
        portion: "9 protein muffins"
      }
    },
    chocolate_protein_muffin: {
      normal: {
        macros: {
          calories: 91 * 4,    // 364 cal (4 muffins)
          protein: 4.5 * 4,    // 18g protein
          carbs: 10.1 * 4,     // 40.4g carbs
          fat: 4 * 4,          // 16g fat
        },
        portion: "4 protein muffins"
      },
      big: {
        macros: {
          calories: 91 * 9,    // 819 cal (9 muffins)
          protein: 4.5 * 9,    // 40.5g protein
          carbs: 10.1 * 9,     // 90.9g carbs
          fat: 4 * 9,          // 36g fat
        },
        portion: "9 protein muffins"
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
          fat: 0
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 450,
          protein: 6,
          carbs: 108,
          fat: 0
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
          fat: 6
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 340,
          protein: 23,
          carbs: 34,
          fat: 17
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
          fat: 0
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 100,
          protein: 0,
          carbs: 23,
          fat: 0
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
          fat: 0
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 130,
          protein: 0,
          carbs: 31,
          fat: 0
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
          fat: 8
        },
        portion: "350ml"
      },
      big: {
        macros: {
          calories: 430,
          protein: 23,
          carbs: 34,
          fat: 23
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
          calories: 180,
          protein: 12,
          carbs: 28,
          fat: 2
        },
        portion: "600g"
      }
    },
    fermented_carrots: {
      normal: {
        macros: {
          calories: 20 * 4,      // 80 cal (400ml)
          protein: 0.5 * 4,      // 2g protein
          carbs: 4 * 4,          // 16g carbs
          fat: 0 * 4             // 0g fat
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 20 * 9,      // 180 cal (900ml)
          protein: 0.5 * 9,      // 4.5g protein
          carbs: 4 * 9,          // 36g carbs
          fat: 0 * 9             // 0g fat
        },
        portion: "900ml"
      }
    },
    fermented_sriracha: {
      normal: {
        macros: {
          calories: 50 * 4,      // 200 cal (400ml)
          protein: 2 * 4,        // 8g protein
          carbs: 10 * 4,         // 40g carbs
          fat: 0.5 * 4           // 2g fat
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 50 * 9,      // 450 cal (900ml)
          protein: 2 * 9,        // 18g protein
          carbs: 10 * 9,         // 90g carbs
          fat: 0.5 * 9           // 4.5g fat
        },
        portion: "900ml"
      }
    },
    fermented_red_cabbage: {
      normal: {
        macros: {
          calories: 15 * 4,      // 60 cal (400ml)
          protein: 1 * 4,        // 4g protein
          carbs: 3 * 4,          // 12g carbs
          fat: 0 * 4             // 0g fat
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 15 * 9,      // 135 cal (900ml)
          protein: 1 * 9,        // 9g protein
          carbs: 3 * 9,          // 27g carbs
          fat: 0 * 9             // 0g fat
        },
        portion: "900ml"
      }
    },
    fermented_white_cabbage: {
      normal: {
        macros: {
          calories: 12 * 4,      // 48 cal (400ml)
          protein: 0.8 * 4,      // 3.2g protein
          carbs: 2.5 * 4,        // 10g carbs
          fat: 0 * 4             // 0g fat
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 12 * 9,      // 108 cal (900ml)
          protein: 0.8 * 9,      // 7.2g protein
          carbs: 2.5 * 9,        // 22.5g carbs
          fat: 0 * 9             // 0g fat
        },
        portion: "900ml"
      }
    },
    homemade_kimchi: {
      normal: {
        macros: {
          calories: 20 * 4,      // 80 cal (400ml)
          protein: 1.5 * 4,      // 6g protein
          carbs: 3.5 * 4,        // 14g carbs
          fat: 0 * 4             // 0g fat
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 20 * 9,      // 180 cal (900ml)
          protein: 1.5 * 9,      // 13.5g protein
          carbs: 3.5 * 9,        // 31.5g carbs
          fat: 0 * 9             // 0g fat
        },
        portion: "900ml"
      }
    },
    white_cabbage: {
      normal: {
        macros: {
          calories: 25,
          protein: 1,
          carbs: 5,
          fat: 0
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 56,
          protein: 2,
          carbs: 11,
          fat: 0
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
          fat: 0
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 56,
          protein: 2,
          carbs: 11,
          fat: 0
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
          fat: 0
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 79,
          protein: 2,
          carbs: 18,
          fat: 0
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
          fat: 0
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 101,
          protein: 5,
          carbs: 20,
          fat: 0
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
          fat: 1
        },
        portion: "400ml"
      },
      big: {
        macros: {
          calories: 203,
          protein: 5,
          carbs: 41,
          fat: 2
        },
        portion: "900ml"
      }
    }
  },

  extra_sides: {
    cucumber_salad: {
      calories: 15,
      protein: 1,
      carbs: 3,
      fat: 0
    },
    fermented_cabbage: {
      calories: 20,
      protein: 1,
      carbs: 4,
      fat: 0
    },
    pico_de_gallo: {
      calories: 25,
      protein: 1,
      carbs: 5,
      fat: 0
    },
    fermented_carrots: {
      calories: 35,
      protein: 1,
      carbs: 8,
      fat: 0
    },
    guacamole: {
      calories: 120,
      protein: 2,
      carbs: 6,
      fat: 11
    },
    kimchi: {
      calories: 45,
      protein: 2,
      carbs: 9,
      fat: 0
    }
  },

  salsas: {
    tomato_bbq: {
      calories: 30,
      protein: 0,
      carbs: 7,
      fat: 0
    },
    honey_mustard: {
      calories: 45,
      protein: 0,
      carbs: 6,
      fat: 3
    },
    sweet_chilli: {
      calories: 40,
      protein: 0,
      carbs: 10,
      fat: 0
    },
    chimichurri: {
      calories: 35,
      protein: 0,
      carbs: 2,
      fat: 3
    },
    sriracha: {
      calories: 15,
      protein: 0,
      carbs: 3,
      fat: 0
    },
    sriracha_honey: {
      calories: 25,
      protein: 0,
      carbs: 6,
      fat: 0
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

export function getDessertMacros(menuDessertId: string, size: 'normal' | 'big'): Macros {
  const nutritionId = menuDessertId
    .replace('carrot_muffin', 'carrot_protein_muffin')
    .replace('chocolate_muffin', 'chocolate_protein_muffin') as keyof typeof NUTRITION.desserts;
  
  const dessert = NUTRITION.desserts[nutritionId]
  if (!dessert[size]) {
    throw new Error(`Size ${size} not available for ${nutritionId}`)
  }
  return dessert[size].macros
}

export function getDrinkMacros(drinkType: keyof typeof NUTRITION.drinks, size: 'normal' | 'big'): Macros {
  const drink = NUTRITION.drinks[drinkType] as Bowl
  if (!drink[size]) {
    throw new Error(`Size ${size} not available for ${drinkType}`)
  }
  return drink[size]!.macros
}

export function getFermentedFoodMacros(id: keyof typeof NUTRITION.fermented_foods, size: 'normal' | 'big'): Macros {
  const item = NUTRITION.fermented_foods[id]
  
  // Handle normal size
  if (size === 'normal') {
    return item.normal.macros
  }
  
  // Handle big size
  if (size === 'big' && 'big' in item) {
    return item.big.macros
  }
  
  throw new Error(`Size ${size} not available for ${id}`)
}

export function getBowlPortion(bowlType: keyof typeof NUTRITION.bowls, size: 'normal' | 'big'): string {
  const bowl = NUTRITION.bowls[bowlType] as Bowl
  if (!bowl[size]) {
    throw new Error(`Size ${size} not available for ${bowlType}`)
  }
  return bowl[size]!.portion
}

export { getFermentedFoodMacros as getFermentMacros }

export function getExtraSideMacros(sideId: keyof typeof NUTRITION.extra_sides): Macros {
  return NUTRITION.extra_sides[sideId]
}

export function getSalsaMacros(salsaId: keyof typeof NUTRITION.salsas): Macros {
  return NUTRITION.salsas[salsaId]
}

export function combineMacros(macros1: Macros, macros2: Macros): Macros {
  return {
    calories: macros1.calories + macros2.calories,
    protein: macros1.protein + macros2.protein,
    carbs: macros1.carbs + macros2.carbs,
    fat: macros1.fat + macros2.fat
  }
}

export function getBaseMacros(baseId: keyof typeof MENU.customizations.base_options): Macros {
  switch (baseId) {
    case 'protein_rice':
      return {
        calories: 150,
        protein: 4,
        carbs: 30,
        fat: 1
      }
    case 'quinoa':
      return {
        calories: 120,
        protein: 4,
        carbs: 21,
        fat: 2
      }
    case 'sweet_potato':
      return {
        calories: 90,
        protein: 2,
        carbs: 20,
        fat: 0
      }
    case 'fermented_cabbage_base':
      return {
        calories: 20,
        protein: 1,
        carbs: 4,
        fat: 0
      }
    case 'cucumber_salad_base':
      return {
        calories: 15,
        protein: 1,
        carbs: 3,
        fat: 0
      }
    case 'kimchi_base':
      return {
        calories: 45,
        protein: 2,
        carbs: 9,
        fat: 0
      }
    default:
      throw new Error(`Unknown base option: ${baseId}`)
  }
} 