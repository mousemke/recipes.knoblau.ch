import React, { useEffect, useMemo, useState } from "react";

import recipes from "../recipes";

import RecipeCard from "../RecipeCard";
import RecipesList from "../RecipesList";

import useStyles from "./App.styles";

import type { Recipe } from "../recipes";

/**
 *
 * @param param parameter to set in the query string
 * @param slug value to set in the query string
 */
const setQueryParam = (param: string, slug: string = "") => {
  const { pathname, search } = window.location;

  let newQuery: string;
  const paramRegex = new RegExp(`\\??\\&?${param}=[\\w\\d-]+`);
  const query = search.replace(paramRegex, "");

  if (query.length === 0) {
    newQuery = slug ? `?${param}=${slug}` : "";
  } else {
    newQuery = slug ? `${query}&${param}=${slug}` : query;
  }

  const newPath = `${pathname}${newQuery}`;
  window.history.replaceState(null, document.title, newPath);
};

/**
 * The main control app. Controls which view is visible as well as havig the states and setters
 */
const App = (): JSX.Element => {
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const classes = useStyles();

  /**
   * on load, this takes query params, parses them, and sets appropriate states
   */
  useEffect(() => {
    const query: { [param: string]: string } = {};

    window.location.search
      .slice(1)
      .split("&")
      .forEach((q) => {
        const paramPair = q.split("=");
        query[paramPair[0]] = paramPair[1];
      });

    if (query.t) {
      setActiveTag(query.t);
    }

    if (query.f) {
      setFilter(query.f);
    }

    if (query.r) {
      setActiveRecipe(recipes[query.r]);
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
            setQueryParam("r");
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
          setQueryParam={setQueryParam}
          tags={tags}
        />
      </div>
    </div>
  );
};

export default App;
