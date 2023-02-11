import type { UnitConversionInfo } from "./RecipeCard.types"
import type { Recipe } from "../recipes";

const METRIC_UNITS: { [unit: string]: UnitConversionInfo | ((amount: number) => UnitConversionInfo) } = {
  liter: {
    convertedUnit: "cup",
    conversionMultiplier: 4.226753,
    abbreviation: "l"
  },
  gram: {
    convertedUnit: "ounce",
    conversionMultiplier: 0.03527396,
    abbreviation: "g"
  },
  kilogram: {
    convertedUnit: "pound",
    conversionMultiplier: 2.204623,
    abbreviation: "kg"
  },
  milliliter: (amount) => {
    if (amount < 14) {
      return {
        convertedUnit: "teaspoon",
        conversionMultiplier: 0.2028841,
        abbreviation: "ml"
      };
    } else if (amount < 100) {
      return {
        convertedUnit: "tablespoon",
        conversionMultiplier: 0.06762804,
        abbreviation: "ml"
      }
    }

    return {
      convertedUnit: "cup",
      conversionMultiplier: 0.004226753,
      abbreviation: "ml"
    }
  }
};

const IMPERIAL_UNITS: { [unit: string]: UnitConversionInfo | ((amount: number) => UnitConversionInfo) } = {
  cup: (amount) => {
    if (amount <= 2) {
      return {
        convertedUnit: "milliliter",
        conversionMultiplier: 236.5882,
        abbreviation: "cup"
      };
    }

    return {
      convertedUnit: "liter",
      conversionMultiplier: 0.2365882,
      abbreviation: "cup"
    };
  },
  "fluid ounce": {
    convertedUnit: "milliliter",
    conversionMultiplier: 28.41306,
    abbreviation: "fl oz"
  },
  ounce: {
    convertedUnit: "gram",
    conversionMultiplier: 28.34952,
    abbreviation: "oz"
  },
  pound: {
    convertedUnit: "kilogram",
    conversionMultiplier: 0.4535924,
    abbreviation: "lb"
  },
  quart: {
    convertedUnit: "liter",
    conversionMultiplier: 0.946353,
    abbreviation: "qt"
  },
  tablespoon: {
    convertedUnit: "milliliter",
    conversionMultiplier: 14.78677,
    abbreviation: "tbsp"
  },
  teaspoon: {
    convertedUnit: "milliliter",
    conversionMultiplier: 4.928922,
    abbreviation: "tsp"
  }
};

const METRIC_UNITS_NAMES = Object.keys(METRIC_UNITS);
const IMPERIAL_UNITS_NAMES = Object.keys(IMPERIAL_UNITS);

/**
 *
 * @param recipe
 * @param isImperial
 * @returns
 */
export const convertRecipeUnits = (recipe: Recipe, isImperial: boolean): Recipe => {
  const oldUnits = isImperial ? IMPERIAL_UNITS : METRIC_UNITS;

  const convertedIngredients = recipe.ingredients.map(ingredient => {
    const { amount, unit } = ingredient;

    if (!unit || !amount) {
      return ingredient;
    }

    let unitInfo = oldUnits[unit];

    if (!unitInfo) {
      return ingredient;
    }

    if (typeof unitInfo === "function") {
      unitInfo = unitInfo(amount);
    }

    return {
      ...ingredient,
      unit: unitInfo.convertedUnit,
      amount: amount * unitInfo.conversionMultiplier
    };
  });

  return {
    ...recipe,
    ingredients: convertedIngredients,
    converted: !Boolean(recipe.converted)
  };
}

/**
 *
 * @param recipe
 * @returns
 */
export const isImperialUnits = (recipe: Recipe): boolean | null => {
  let isImperial: boolean | null | undefined = undefined;

  const units = recipe.ingredients.map(r => r.unit).filter(Boolean) as string[];
  units.forEach(unit => {
    if (isImperial !== null) {
      if (IMPERIAL_UNITS_NAMES.includes(unit)) {
        if (isImperial === false) {
          return isImperial = null;
        }

        isImperial = true;
      } else if (METRIC_UNITS_NAMES.includes(unit)) {
        if (isImperial === true) {
          return isImperial = null;
        }

        isImperial = false;
      }
    }
  });

  return isImperial === undefined ? null : isImperial;
};

/**
 *
 * @param minutes
 * @returns
 */
export const minutesHoursDays = (minutes: number) => {
  if (minutes < 60) {
    return `${minutes} min.`;
  } else if (minutes < 1440) {
    const hours = parseFloat((minutes / 60).toFixed(2));

    return `${hours} hours`;
  }

  const days = parseFloat((minutes / 60 / 24).toFixed(2));

  return `${days} days`;
};

/**
 * Parses decimal into easier to read fractions when possible
 *
 * @param rawAmount initial amount + multiplier
 */
export const parseIngredientAmount = (rawAmount: number) => {
  /**
   * converts commonly used measurements from float to fractions
   * @paran integer
   * @param fraction
   */
  const getFraction = (rawInteger: number, fraction: number) => {
    const integer = rawInteger === 0 ? "" : `${rawInteger} `;

    switch (fraction) {
      case 875:
        return `${integer}7/8 `;
      case 750:
        return `${integer}3/4 `;
      case 667:
        return `${integer}2/3 `;
      case 625:
        return `${integer}5/8 `;
      case 500:
        return `${integer}1/2 `;
      case 375:
        return `${integer}3/8 `;
      case 333:
        return `${integer}1/3 `;
      case 250:
        return `${integer}1/4 `;
      case 125:
        return `${integer}1/8 `;
      case 0:
        return `${rawInteger} `;
      default:
        return `${rawInteger}.${fraction} `;
    }
  };

  const amountArray = rawAmount.toFixed(3).split(".");

  return getFraction(
    parseInt(amountArray[0], 10),
    parseInt(amountArray[1], 10)
  );
};
