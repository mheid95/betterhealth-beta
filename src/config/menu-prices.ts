export const MENU = {
  // MAIN DISHES
  bowls: {
    salmon_bowl: {
      tags: ["high_protein", "omega_3"],
      normal: { price: "53.000", ingredients: "150g protein rice, 150g salmon, 50g veggies" },
      big: { price: "62.000", ingredients: "250g protein rice, 250g salmon, 70g veggies" }
    },
    budget_bowl: {
      tags: ["high_protein"],
      normal: { price: "35.000", ingredients: "150g protein rice, 150g chicken, 50g veggies" },
      big: { price: "39.500", ingredients: "250g protein rice, 250g chicken, 70g veggies" }
    },
    t_bone_bowl: {
      tags: ["high_protein", "premium"],
      normal: { price: "89.000", ingredients: "200g protein rice, 350g T-Bone steak, 70g veggies" },
      big: null
    },
    organic_quinoa: {
      tags: ["vegetarian"],
      normal: { price: "39.500", ingredients: "200g quinoa salad with veggies & 3 organic eggs" },
      big: { price: "44.000", ingredients: "300g quinoa salad with veggies & 5 organic eggs" }
    },
    organic_breakfast: {
      tags: ["vegetarian"],
      normal: { price: "26.000", ingredients: "150g cucumber, 3 eggs, 30g fermented veggies" },
      big: { price: "35.000", ingredients: "250g cucumber, 5 eggs, 50g fermented veggies" }
    },
    pulled_beef: {
      tags: ["high_protein"],
      normal: { price: "44.000", ingredients: "150g protein rice, 150g beef, 50g veggies" },
      big: { price: "53.000", ingredients: "250g protein rice, 250g beef, 70g veggies" }
    },
    pulled_chicken: {
      tags: ["high_protein"],
      normal: { price: "44.000", ingredients: "150g protein rice, 150g chicken, 50g veggies" },
      big: { price: "53.000", ingredients: "250g protein rice, 250g chicken, 70g veggies" }
    },
    chicken_coconut_curry: {
      tags: ["high_protein"],
      normal: { price: "44.000", ingredients: "150g protein rice, 150g chicken, 50g veggies, coconut milk" },
      big: { price: "53.000", ingredients: "250g protein rice, 250g chicken, 70g veggies, coconut milk" }
    },
    butter_lemon_shrimp: {
      tags: ["high_protein"],
      normal: { price: "44.000", ingredients: "150g protein rice, 125g shrimp, 50g veggies, butter" },
      big: { price: "53.000", ingredients: "250g protein rice, 225g shrimp, 70g veggies, butter" }
    },
    surf_and_turf: {
      tags: ["high_protein", "premium"],
      normal: { price: "53.000", ingredients: "150g protein rice, 150g beef, 70g shrimp, 50g veggies" },
      big: { price: "62.000", ingredients: "250g protein rice, 250g beef, 110g shrimp, 70g veggies" }
    }
  },

  // CUSTOMIZATIONS
  customizations: {
    extra_sides: {
      cucumber_salad: "1.000",
      fermented_cabbage: "1.500",
      pico_de_gallo: "1.500",
      fermented_carrots: "2.000",
      guacamole: "3.000",
      kimchi: "3.500"
    },
    salsas: {
      tomato_bbq: "1.000",
      honey_mustard: "1.500",
      sweet_chilli: "1.500",
      chimichurri: "2.000",
      sriracha: "2.000",
      sriracha_honey: "3.500"
    },
    base_options: {
      protein_rice: "0.000",
      quinoa: "3.500",
      sweet_potato: "5.000",
      fermented_cabbage_base: "3.500",
      cucumber_salad_base: "3.500",
      kimchi_base: "8.000"
    }
  },

  // DESSERTS
  desserts: {
    protein_waffle: {
      name: "Protein Waffle",
      ingredients: "Organic eggs, bananas, honey & cinnamon",
      normal: {
        price: "17.000",
        quantity: "4 waffles"
      },
      big: {
        price: "35.000",
        quantity: "9 waffles"
      }
    },
    carrot_muffin: {
      name: "Carrot Protein Muffin",
      ingredients: "Carrots, eggs, collagen, milk, banana & honey",
      normal: {
        price: "17.000",
        quantity: "4 muffins"
      },
      big: {
        price: "35.000",
        quantity: "9 muffins"
      }
    },
    chocolate_muffin: {
      name: "Chocolate Protein Muffin",
      ingredients: "Cocoa, eggs, collagen, sweet potatoes & banana",
      normal: {
        price: "17.000",
        quantity: "4 muffins"
      },
      big: {
        price: "35.000",
        quantity: "9 muffins"
      }
    }
  },

  // BEVERAGES
  drinks: {
    orange_juice: {
      name: "Orange Juice",
      ingredients: "Fresh organic oranges",
      normal: {
        price: "12.500",
        volume: "350ml"
      },
      big: {
        price: "26.000",
        volume: "1L"
      }
    },
    kefir: {
      name: "Kefir",
      ingredients: "Raw milk, kefir grains",
      normal: {
        price: "12.500",
        volume: "350ml"
      },
      big: {
        price: "26.000",
        volume: "1L"
      }
    },
    kombucha: {
      name: "Kombucha",
      ingredients: "Green tea, sugar, kombucha culture",
      normal: {
        price: "8.000",
        volume: "350ml"
      },
      big: {
        price: "17.000",
        volume: "1L"
      }
    },
    electrolyte_lemonade: {
      name: "Electrolyte Lemonade",
      ingredients: "Lemon, honey, himalayan salt",
      normal: {
        price: "8.000",
        volume: "350ml"
      },
      big: {
        price: "17.000",
        volume: "1L"
      }
    },
    raw_milk: {
      name: "Raw Milk",
      ingredients: "Raw grass-fed cow milk",
      normal: {
        price: "5.000",
        volume: "350ml"
      },
      big: {
        price: "11.000",
        volume: "1L"
      }
    }
  },

  // FERMENTED PRODUCTS
  fermented_foods: {
    sourdough_protein_bread: {
      image: "/images/fermented-foods/sourdough_protein_bread.jpg",
      name: "Sourdough Protein Bread",
      ingredients: "Organic flour, protein, sourdough culture",
      normal: {
        price: "26.000",
        volume: "600g"
      },
      big: null
    },
    white_cabbage: {
      image: "/images/fermented-foods/white_cabbage.jpg",
      name: "White Cabbage Sauerkraut",
      ingredients: "White cabbage, himalayan salt",
      normal: {
        price: "8.900",
        volume: "400ml"
      },
      big: {
        price: "17.000",
        volume: "900ml"
      }
    },
    red_cabbage: {
      image: "/images/fermented-foods/red_cabbage.jpg",
      name: "Red Cabbage Sauerkraut",
      ingredients: "Red cabbage, himalayan salt",
      normal: {
        price: "8.900",
        volume: "400ml"
      },
      big: {
        price: "17.000",
        volume: "900ml"
      }
    },
    carrots: {
      image: "/images/fermented-foods/carrots.jpg",
      name: "Fermented Carrots",
      ingredients: "Carrots, himalayan salt, spices",
      normal: {
        price: "8.900",
        volume: "400ml"
      },
      big: {
        price: "17.000",
        volume: "900ml"
      }
    },
    kimchi: {
      image: "/images/fermented-foods/kimchi.jpg",
      name: "Kimchi",
      ingredients: "Napa cabbage, korean chili, garlic, ginger",
      normal: {
        price: "17.000",
        volume: "400ml"
      },
      big: {
        price: "35.000",
        volume: "900ml"
      }
    },
    sriracha: {
      image: "/images/fermented-foods/sriracha.jpg",
      name: "Fermented Sriracha",
      ingredients: "Red chili, garlic, vinegar",
      normal: {
        price: "35.000",
        volume: "400ml"
      },
      big: {
        price: "66.500",
        volume: "900ml"
      }
    }
  },

  // DELIVERY & SUBSCRIPTIONS
  policies: {
    delivery: {
      inner_city: {
        areas: ["Laureles", "Poblado"],
        price: "10.000",
        free_above: "110.000"
      },
      outer_city: {
        areas: ["Envigado", "Bello"],
        price: "15.000",
        free_above: "160.000"
      }
    },
    subscriptions: {
      two_weeks: {
        discount: 5
      },
      one_month: {
        discount: 8
      },
      three_months: {
        discount: 10
      }
    }
  }
} as const

// Types for accessing prices safely
export type BowlType = keyof typeof MENU.bowls
type SizeType = 'normal' | 'big'

interface BowlItem {
  readonly price: string;
  readonly ingredients: string;
}

interface Bowl {
  readonly tags: readonly string[];
  readonly normal: BowlItem;
  readonly big: BowlItem | null;
}

// Helper functions
export function getBowlPrice(
  bowlType: BowlType,
  size: SizeType
): string {
  const bowl = MENU.bowls[bowlType] as Bowl
  if (!bowl[size]) {
    throw new Error(`Size ${size} not available for ${bowlType}`)
  }
  return bowl[size]!.price
}

export function getBowlIngredients(
  bowlType: BowlType,
  size: SizeType
): string {
  const bowl = MENU.bowls[bowlType] as Bowl
  if (!bowl[size]) {
    throw new Error(`Size ${size} not available for ${bowlType}`)
  }
  return bowl[size]!.ingredients
}

export function getBowlTags(bowlType: BowlType): readonly string[] {
  const bowl = MENU.bowls[bowlType] as Bowl
  return bowl.tags
}

export function getExtraSidePrice(side: keyof typeof MENU.customizations.extra_sides): string {
  return MENU.customizations.extra_sides[side]
}

export function getSalsaPrice(salsa: keyof typeof MENU.customizations.salsas): string {
  return MENU.customizations.salsas[salsa]
}

export function getDessertPrice(dessertType: keyof typeof MENU.desserts, size: 'normal' | 'big'): string {
  return MENU.desserts[dessertType][size].price;
}

export function getDessertQuantity(dessertType: keyof typeof MENU.desserts, size: 'normal' | 'big'): string {
  return MENU.desserts[dessertType][size].quantity;
}

export function getDrinkPrice(id: keyof typeof MENU.drinks, size: 'normal' | 'big'): string {
  return MENU.drinks[id][size].price
}

export function getDrinkVolume(id: keyof typeof MENU.drinks, size: 'normal' | 'big'): string {
  return MENU.drinks[id][size].volume
}

export function getFermentedFoodPrice(id: keyof typeof MENU.fermented_foods, size: 'normal' | 'big'): string {
  const fermentedFood = MENU.fermented_foods[id]
  if (!fermentedFood[size]) {
    throw new Error(`Size ${size} not available for ${id}`)
  }
  return fermentedFood[size]!.price
}

export function getFermentedFoodVolume(id: keyof typeof MENU.fermented_foods, size: 'normal' | 'big'): string {
  const fermentedFood = MENU.fermented_foods[id]
  if (!fermentedFood[size]) {
    throw new Error(`Size ${size} not available for ${id}`)
  }
  return fermentedFood[size]!.volume
}

export function getSubscriptionDiscount(
  duration: 'two_weeks' | 'one_month' | 'three_months'
): number {
  return MENU.policies.subscriptions[duration].discount
}

export function getDeliveryPrice(zone: 'inner_city' | 'outer_city', orderTotal: string): string {
  const policy = MENU.policies.delivery[zone]
  return parseFloat(orderTotal) >= parseFloat(policy.free_above) ? "0" : policy.price
}

export function formatPrice(price: string): string {
  return `$${price}`
}

export type MenuCategory = 'bowls' | 'desserts' | 'drinks' | 'fermented_foods'