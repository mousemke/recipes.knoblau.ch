import type { Recipe } from "../recipes";

export interface RecipeCardProps {
  multiplier: number;
  recipe: Recipe;
  setMultiplier: React.Dispatch<React.SetStateAction<number>>;
}
