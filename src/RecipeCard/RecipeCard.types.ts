import type { Recipe } from "../recipes";

export interface RecipeCardProps {
  gotoRecipe: (slug: string) => void;
  multiplier: number;
  recipe: Recipe;
  setMultiplier: React.Dispatch<React.SetStateAction<number>>;
}
