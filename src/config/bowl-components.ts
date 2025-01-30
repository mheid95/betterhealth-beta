interface Macros {
  calories: number
  protein: number
  carbs: number
  fat: number
}

interface SizeOption {
  weight: string
  macros: Macros
}

interface BowlComponent {
  name: string
  sizes: {
    normal: SizeOption
    big: SizeOption
  }
}

export const BOWL_BASES: Record<string, BowlComponent> = {
  protein_rice: {
    name: "Protein Rice",
    sizes: {
      normal: {
        weight: "150g",
        macros: {
          calories: 266,
          protein: 15,
          carbs: 45,
          fat: 2.5
        }
      },
      big: {
        weight: "250g",
        macros: {
          calories: 444,
          protein: 25,
          carbs: 75,
          fat: 4
        }
      }
    }
  },
  sweet_potato: {
    name: "Sweet Potato",
    sizes: {
      normal: {
        weight: "250g",
        macros: {
          calories: 215,
          protein: 4,
          carbs: 50,
          fat: 0.3
        }
      },
      big: {
        weight: "350g",
        macros: {
          calories: 301,
          protein: 5.6,
          carbs: 70,
          fat: 0.4
        }
      }
    }
  },
  quinoa: {
    name: "Cooked Quinoa",
    sizes: {
      normal: {
        weight: "150g",
        macros: {
          calories: 222,
          protein: 8,
          carbs: 39,
          fat: 3.5
        }
      },
      big: {
        weight: "250g",
        macros: {
          calories: 370,
          protein: 13,
          carbs: 65,
          fat: 5.8
        }
      }
    }
  },
  cucumber_base: {
    name: "Cucumber with Lemon",
    sizes: {
      normal: {
        weight: "150g",
        macros: {
          calories: 24,
          protein: 1,
          carbs: 5,
          fat: 0.1
        }
      },
      big: {
        weight: "250g",
        macros: {
          calories: 40,
          protein: 1.7,
          carbs: 8.3,
          fat: 0.2
        }
      }
    }
  },
  fermented_cabbage_base: {
    name: "Fermented Cabbage",
    sizes: {
      normal: {
        weight: "150g",
        macros: {
          calories: 30,
          protein: 2,
          carbs: 6,
          fat: 0.2
        }
      },
      big: {
        weight: "250g",
        macros: {
          calories: 50,
          protein: 3.3,
          carbs: 10,
          fat: 0.3
        }
      }
    }
  },
  kimchi_base: {
    name: "Homemade Kimchi",
    sizes: {
      normal: {
        weight: "150g",
        macros: {
          calories: 40,
          protein: 2,
          carbs: 8,
          fat: 0.5
        }
      },
      big: {
        weight: "250g",
        macros: {
          calories: 67,
          protein: 3.3,
          carbs: 13,
          fat: 0.8
        }
      }
    }
  }
}

export const BOWL_SIDES: Record<string, BowlComponent> = {
  veggies: {
    name: "Veggies (cooked broccoli & carrots)",
    sizes: {
      normal: {
        weight: "50g",
        macros: {
          calories: 20,
          protein: 1.2,
          carbs: 4,
          fat: 0.2
        }
      },
      big: {
        weight: "70g",
        macros: {
          calories: 28,
          protein: 1.7,
          carbs: 5.6,
          fat: 0.3
        }
      }
    }
  },
  cucumber: {
    name: "Cucumber with Lemon",
    sizes: {
      normal: {
        weight: "50g",
        macros: {
          calories: 8,
          protein: 0.3,
          carbs: 1.7,
          fat: 0
        }
      },
      big: {
        weight: "70g",
        macros: {
          calories: 11,
          protein: 0.4,
          carbs: 2.4,
          fat: 0
        }
      }
    }
  },
  tomato_onion: {
    name: "Tomato Onion Salad",
    sizes: {
      normal: {
        weight: "50g",
        macros: {
          calories: 12,
          protein: 0.5,
          carbs: 2.7,
          fat: 0.1
        }
      },
      big: {
        weight: "70g",
        macros: {
          calories: 17,
          protein: 0.7,
          carbs: 3.8,
          fat: 0.1
        }
      }
    }
  },
  guacamole: {
    name: "Guacamole",
    sizes: {
      normal: {
        weight: "50g",
        macros: {
          calories: 80,
          protein: 1,
          carbs: 4,
          fat: 7.5
        }
      },
      big: {
        weight: "70g",
        macros: {
          calories: 112,
          protein: 1.4,
          carbs: 5.6,
          fat: 10.5
        }
      }
    }
  },
  fermented_cabbage: {
    name: "Fermented Cabbage",
    sizes: {
      normal: {
        weight: "50g",
        macros: {
          calories: 10,
          protein: 0.7,
          carbs: 2,
          fat: 0.1
        }
      },
      big: {
        weight: "70g",
        macros: {
          calories: 14,
          protein: 1,
          carbs: 2.8,
          fat: 0.1
        }
      }
    }
  },
  fermented_carrots: {
    name: "Fermented Carrots",
    sizes: {
      normal: {
        weight: "50g",
        macros: {
          calories: 18,
          protein: 0.6,
          carbs: 4,
          fat: 0.1
        }
      },
      big: {
        weight: "70g",
        macros: {
          calories: 25,
          protein: 0.8,
          carbs: 5.6,
          fat: 0.1
        }
      }
    }
  },
  kimchi: {
    name: "Kimchi",
    sizes: {
      normal: {
        weight: "50g",
        macros: {
          calories: 13,
          protein: 0.7,
          carbs: 2.7,
          fat: 0.2
        }
      },
      big: {
        weight: "70g",
        macros: {
          calories: 18,
          protein: 1,
          carbs: 3.8,
          fat: 0.3
        }
      }
    }
  }
}

export const BOWL_SALSAS: Record<string, BowlComponent> = {
  tomato_bbq: {
    name: "Tomato BBQ",
    sizes: {
      normal: {
        weight: "25g",
        macros: {
          calories: 15,
          protein: 0.2,
          carbs: 3.5,
          fat: 0
        }
      },
      big: {
        weight: "35g",
        macros: {
          calories: 21,
          protein: 0.3,
          carbs: 4.9,
          fat: 0
        }
      }
    }
  },
  honey_mustard: {
    name: "Honey Mustard",
    sizes: {
      normal: {
        weight: "25g",
        macros: {
          calories: 80,
          protein: 0.5,
          carbs: 20,
          fat: 0.2
        }
      },
      big: {
        weight: "35g",
        macros: {
          calories: 112,
          protein: 0.7,
          carbs: 28,
          fat: 0.3
        }
      }
    }
  },
  sweet_chilli: {
    name: "Sweet Chilli",
    sizes: {
      normal: {
        weight: "25g",
        macros: {
          calories: 35,
          protein: 0.3,
          carbs: 8,
          fat: 0.1
        }
      },
      big: {
        weight: "35g",
        macros: {
          calories: 49,
          protein: 0.4,
          carbs: 11.2,
          fat: 0.1
        }
      }
    }
  },
  chimichurri: {
    name: "Chimichurri",
    sizes: {
      normal: {
        weight: "25g",
        macros: {
          calories: 90,
          protein: 0.2,
          carbs: 1,
          fat: 9
        }
      },
      big: {
        weight: "35g",
        macros: {
          calories: 126,
          protein: 0.3,
          carbs: 1.4,
          fat: 12.6
        }
      }
    }
  },
  sriracha: {
    name: "Sriracha",
    sizes: {
      normal: {
        weight: "25g",
        macros: {
          calories: 10,
          protein: 0.5,
          carbs: 2,
          fat: 0
        }
      },
      big: {
        weight: "35g",
        macros: {
          calories: 14,
          protein: 0.7,
          carbs: 2.8,
          fat: 0
        }
      }
    }
  },
  sriracha_honey: {
    name: "Sriracha Honey",
    sizes: {
      normal: {
        weight: "25g",
        macros: {
          calories: 30,
          protein: 0.4,
          carbs: 7,
          fat: 0
        }
      },
      big: {
        weight: "35g",
        macros: {
          calories: 42,
          protein: 0.6,
          carbs: 9.8,
          fat: 0
        }
      }
    }
  }
}

// Helper function to calculate total macros for a bowl
export function calculateBowlMacros(
  baseId: keyof typeof BOWL_BASES,
  sideIds: Array<keyof typeof BOWL_SIDES>,
  salsaIds: Array<keyof typeof BOWL_SALSAS>,
  size: 'normal' | 'big'
): Macros {
  // Start with base macros
  const macros: Macros = { ...BOWL_BASES[baseId].sizes[size].macros }

  // Add sides
  sideIds.forEach(sideId => {
    const sideMacros = BOWL_SIDES[sideId].sizes[size].macros
    macros.calories += sideMacros.calories
    macros.protein += sideMacros.protein
    macros.carbs += sideMacros.carbs
    macros.fat += sideMacros.fat
  })

  // Add salsas
  salsaIds.forEach(salsaId => {
    const salsaMacros = BOWL_SALSAS[salsaId].sizes[size].macros
    macros.calories += salsaMacros.calories
    macros.protein += salsaMacros.protein
    macros.carbs += salsaMacros.carbs
    macros.fat += salsaMacros.fat
  })

  return macros
} 