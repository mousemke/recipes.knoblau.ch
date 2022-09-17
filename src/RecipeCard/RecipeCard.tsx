import React from "react";

import useStyles from "./RecipeCard.styles";

import type { RecipeCardProps } from "./RecipeCard.types";

/**
 *
 * @param minutes
 * @returns
 */
const minutesHoursDays = (minutes: number) => {
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
 * A generalized recipe card
 */
const RecipeCard = (props: RecipeCardProps): JSX.Element => {
  const classes = useStyles();

  const { multiplier, recipe, setMultiplier } = props;

  const slug = recipe.title.replace(/ /g, "");

  return (
    <div className={classes.cardWrapper} onClick={(e) => e.stopPropagation()}>
      <div className={classes.header}>
        <div>
          <h1 className={classes.title}>{recipe.title}</h1>
          <div className={classes.recipeInfoWrapper}>
            <div>
              Yield:{" "}
              <span className={classes.recipeInfo}>
                {recipe.servings * multiplier} Servings
              </span>
            </div>
            {recipe.marinadeTime ? (
              <div>
                Marinade Time:{" "}
                <span className={classes.recipeInfo}>
                  {minutesHoursDays(recipe.marinadeTime)}
                  {multiplier !== 1 ? "*" : ""}
                </span>
              </div>
            ) : null}
            <div>
              Prep Time:{" "}
              <span className={classes.recipeInfo}>
                {minutesHoursDays(recipe.prepTime)}
                {multiplier !== 1 ? "*" : ""}
              </span>
            </div>
            <div>
              Cook time:{" "}
              <span className={classes.recipeInfo}>
                {minutesHoursDays(recipe.cookTime)}
                {multiplier !== 1 ? "*" : ""}
              </span>
            </div>
            {multiplier !== 1 ? (
              <div className={classes.multiplierWarning}>
                * The recipe servings have been changed. Prep time, cook time,
                and specific cooking instructions may need to be altered.
              </div>
            ) : null}
          </div>
          <h4 className={classes.summary}>{recipe.summary}</h4>
        </div>
        <img
          className={classes.thumbnail}
          srcSet={`./pics/${slug}/${slug}.jpg`}
        />
      </div>
      <div className={classes.recipeSection}>
        <a
          className={classes.originLink}
          href={recipe.origin}
          target="_blank"
          rel="noreferrer noopener"
        >
          Originally seen here
        </a>
        <div className={classes.changeScale}>
          Change recipe servings{" "}
          <input
            min={1}
            type="number"
            value={recipe.servings * multiplier}
            onChange={(e) =>
              e.target.value
                ? setMultiplier(parseInt(e.target.value) / recipe.servings)
                : 1
            }
          />
        </div>
        <div className={classes.seperator}></div>
        <p className={classes.sectionHeader}>
          <strong>Ingredients</strong>
        </p>
        <ul className={classes.ingredients}>
          {recipe.ingredients.map((ingredient, i) => (
            <li key={i}>
              {ingredient.amount
                ? `${parseFloat((ingredient.amount * multiplier).toFixed(2))} `
                : ""}
              {ingredient.name}
            </li>
          ))}
        </ul>
        <div className={classes.seperator}></div>
        <p className={classes.sectionHeader}>
          <strong>Directions</strong>
        </p>
        <div>
          {recipe.instructions.map((instruction, i) => (
            <div key={i} className={classes.instruction}>
              <strong>{i + 1}.</strong>
              <p>{instruction}</p>
            </div>
          ))}
        </div>
      </div>
      {recipe.progressPics && (
        <div className={classes.progressPics}>
          {Array.from(Array(recipe.progressPics), (_, i) => (
            <img
              key={i}
              className={classes.progressPic}
              src={`./pics/${slug}/${slug}${i + 1}.jpg`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
