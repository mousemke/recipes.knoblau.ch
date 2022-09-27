import React, { useEffect, useMemo, useState } from "react";

import recipes from "../recipes";

import RecipeCard from "../RecipeCard";
import RecipesList from "../RecipesList";

import useStyles from "./App.styles";

import type { Recipe } from "../recipes";

/**
 *
 * @param slug
 */
const setWindowHash = (slug: string = "") => {
  window.location.hash = slug;
};

/**
 * An app placeholder to make sure our setup works
 *
 * @returns our example
 */
const App = (): JSX.Element => {
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const classes = useStyles();

  useEffect(() => {
    const hash = window.location.hash.slice(1);

    if (hash && hash.length > 1) {
      const recipe = recipes[hash];
      recipe && setActiveRecipe(recipe);
    }
  }, []);

  /**
   * initial tags
   */
  const tags = useMemo(() => {
    const newTags: string[] = [];

    Object.values(recipes).forEach((r) =>
      r.tags.forEach((t) => {
        newTags.push(`${t[0].toUpperCase()}${t.slice(1)}`);
      })
    );

    return new Set<string>(newTags.sort());
  }, []);

  return (
    <div>
      {activeRecipe ? (
        <div
          className={classes.recipeCardWrapper}
          onClick={() => {
            setActiveRecipe(null);
            setWindowHash();
            setMultiplier(1);
          }}
        >
          <RecipeCard
            recipe={activeRecipe}
            multiplier={multiplier}
            setMultiplier={setMultiplier}
          />
        </div>
      ) : null}
      <div className={activeRecipe ? classes.hiddenList : undefined}>
        <RecipesList
          activeTag={activeTag}
          filter={filter}
          recipes={recipes}
          setActiveRecipe={setActiveRecipe}
          setActiveTag={setActiveTag}
          setFilter={setFilter}
          setWindowHash={setWindowHash}
          tags={tags}
        />
      </div>
    </div>
  );
};

export default App;
