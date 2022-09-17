import React, { useEffect, useState } from "react";
import Select from "react-select";

import useStyles, { selectStyles } from "./RecipesList.styles";

import type { Recipe } from "../recipes";
import type { RecipesListProps } from "./RecipesList.types" ;

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
  return recipes.filter((r) => {
    const { ingredients, instructions, summary, title } = r;

    if (
      summary.toLowerCase().includes(filter) ||
      title.toLowerCase().includes(filter) ||
      ingredients.some((i) => i.name.toLowerCase().includes(filter)) ||
      instructions.some((i) => i.toLowerCase().includes(filter))
    ) {
      return true;
    }
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

  const classes = useStyles();

  /**
   * on tag or filter change, this updates the visible recipes
   */
  useEffect(() => {
    let filteredRecipes = Object.values(recipes);

    if (activeTag) {
      filteredRecipes = filterByTag(filteredRecipes, activeTag);
    }

    if (filter) {
      filteredRecipes = filterByString(filteredRecipes, filter);
    }

    setVisibleRecipes(filteredRecipes);
  }, [activeTag, filter]);

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
            onChange={(e) => {
              setActiveTag(e?.value.toLowerCase() || null);
            }}
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
          {visibleRecipes.map((recipe, i) => {
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
          })}
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
