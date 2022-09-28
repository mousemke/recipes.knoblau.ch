import type { Recipe, Recipes } from "../recipes";

export interface RecipesListProps {
  activeTag: string | null;
  filter: string | null;
  recipes: Recipes;
  setActiveRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
  setActiveTag: React.Dispatch<React.SetStateAction<string | null>>;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  setQueryParam: (param: string, slug: string) => void
  tags: Set<string>;
}

export interface FilteredRecipes {
  summary: Recipe[];
  title: Recipe[];
  ingredients: Recipe[];
  instructions: Recipe[];
}
