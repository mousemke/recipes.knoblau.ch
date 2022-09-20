import React, { useCallback, useEffect, useState } from "react";
import Select from "react-select";

import useStyles, { selectStyles } from "./RecipesList.styles";

import type { Recipe } from "../recipes";
import type { FilteredRecipes, RecipesListProps } from "./RecipesList.types";
import type { Classes } from "jss";

/**
 *
 * @param recipes
 * @param tag
 * @returns
 */
const filterByTag = (recipes: Recipe[], tag: string) => {
  return recipes.filter((r) => {
    if (r.tags.includes(tag)) {
      return true;
    }
  });
};

/**
 *
 * @param recipes
 * @param filter
 * @returns
 */
const filterByString = (recipes: Recipe[], filter: string) => {
  const filteredRecipes: FilteredRecipes = {
    title: [],
    summary: [],
    ingredients: [],
    instructions: []
  };

  recipes.filter((r) => {
    const { ingredients, instructions, summary, title } = r;

    if (title.toLowerCase().includes(filter)) {
      filteredRecipes.title.push(r);
    }

    if (summary.toLowerCase().includes(filter)) {
      filteredRecipes.summary.push(r);
    }

    if (ingredients.some((i) => i.name.toLowerCase().includes(filter))) {
      filteredRecipes.ingredients.push(r);
    }

    if (instructions.some((i) => i.toLowerCase().includes(filter))) {
      filteredRecipes.instructions.push(r);
    }
  });

  return filteredRecipes;
};

/**
 *
 * @param recipes
 * @param setActiveRecipe
 * @param setWindowHash
 * @returns
 */
const rendereRecipeLinks = (
  recipes: Recipe[],
  classes: Classes,
  setActiveRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>,
  setWindowHash: (slug: string) => void
) => {
  return recipes.map((recipe, i) => {
    return (
      <a
        key={i}
        className={classes.recipeLink}
        onClick={() => {
          setWindowHash(recipe.title.replace(/ /g, ""));
          setActiveRecipe(recipe);
        }}
        role="button"
      >
        <div>{recipe.title}</div>
      </a>
    );
  });
};

/**
 * A generalized recipe card
 */
const RecipesList = (props: RecipesListProps): JSX.Element => {
  const {
    activeTag,
    filter,
    recipes,
    setActiveRecipe,
    setActiveTag,
    setFilter,
    setWindowHash,
    tags
  } = props;

  const [visibleRecipes, setVisibleRecipes] = useState(Object.values(recipes));
  const [filteredRecipes, setFilteredRecipes] =
    useState<FilteredRecipes | null>(null);

  const classes = useStyles();

  /**
   * Built as a callback simply to keep the JSX cleaner, as it always
   * takes the same 2nd, 3rd, and 4th parameters
   */
  const getRecipeLinks = useCallback(
    (recipes: Recipe[]) =>
      rendereRecipeLinks(recipes, classes, setActiveRecipe, setWindowHash),
    [classes, setActiveRecipe, setWindowHash]
  );

  /**
   * on tag change, this updates the visible recipes
   */
  useEffect(() => {
    let allRecipes = Object.values(recipes);

    if (activeTag) {
      setVisibleRecipes(filterByTag(allRecipes, activeTag));
    } else {
      setVisibleRecipes(allRecipes);
    }
  }, [activeTag]);

  /**
   * on filter change, breaks the visible recipes into relevant results
   */
  useEffect(() => {
    if (filter) {
      setFilteredRecipes(filterByString(visibleRecipes, filter));
    }
  }, [filter, visibleRecipes]);

  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.pageTitle}>recipes.knoblau.ch</h1>
        <div>
          <label
            htmlFor="tagFilterSelect"
            className={classes.accessibiiltyLabel}
          >
            Filter By Tag
          </label>
          <Select
            defaultValue={
              activeTag ? { label: activeTag, value: activeTag } : undefined
            }
            id="tagFilterSelect"
            isClearable
            onChange={(e) => setActiveTag(e?.value.toLowerCase() || null)}
            options={
              tags ? Array.from(tags).map((t) => ({ label: t, value: t })) : []
            }
            placeholder="Filter by Tag"
            styles={selectStyles}
          />
          <label
            className={classes.accessibiiltyLabel}
            htmlFor={classes.filterInput}
          >
            Filter by Text
          </label>
          <input
            className={classes.filterInput}
            defaultValue={filter || ""}
            id={classes.filterInput}
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
            placeholder="Filter by Text"
            type="text"
          />
        </div>
      </div>
      <div className={classes.listWrapper}>
        <div className={classes.topFade} />
        <div className={classes.list}>
          {filter && filteredRecipes
            ? Object.keys(filteredRecipes).map((rawCategory, i) => {
                const category = rawCategory as keyof typeof filteredRecipes;
                const foundRecipes = filteredRecipes[category] as Recipe[];

                return foundRecipes.length === 0 ? null : (
                  <div key={i}>
                    <h3 className={classes.filterHeader}>
                      {`${category[0].toUpperCase()}${category.slice(1)}`}
                    </h3>
                    {getRecipeLinks(foundRecipes)}
                  </div>
                );
              })
            : getRecipeLinks(visibleRecipes)}
        </div>
        <div className={classes.bottomFade} />
      </div>
      <div className={classes.bottomText}>
        The internet is a big place. And although it seems anything there is
        forever - blogs and sites get shut down leaving no access to the amazing
        recipes they once had. This has happened to me too many times and I
        decided I needed to do something about it. This site is for my personal
        use cataloging recipes I've found across the internet as well as my own
        personal recipes. No copyright infringement intended and original posts
        noted when applicable
      </div>
    </>
  );
};

export default RecipesList;
