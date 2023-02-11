import type { Recipe } from "../recipes";

export interface RecipeCardProps {
  gotoRecipe: (slug: string) => void;
  multiplier: number;
  recipe: Recipe;
  setActiveRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
  setMultiplier: React.Dispatch<React.SetStateAction<number>>;
}

export interface UnitConversionInfo {
  convertedUnit: string;
  conversionMultiplier: number;
  abbreviation: string;
}