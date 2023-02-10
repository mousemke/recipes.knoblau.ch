import type { Recipe, Recipes } from "../recipes";

export interface RecipeCardProps {
  multiplier: number;
  recipe: Recipe;
  recipes: Recipes;
  setActiveRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
  setMultiplier: React.Dispatch<React.SetStateAction<number>>;
}
