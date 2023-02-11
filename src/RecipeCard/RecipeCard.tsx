import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import useStyles from "./RecipeCard.styles";
import { convertRecipeUnits, isImperialUnits, minutesHoursDays, parseIngredientAmount } from "./RecipeCard.helpers";

import type { RecipeCardProps } from "./RecipeCard.types";

/**
 * A generalized recipe card
 */
const RecipeCard = (props: RecipeCardProps): JSX.Element => {
  const { gotoRecipe, multiplier, recipe, setActiveRecipe, setMultiplier } = props;
  const [isImperial, setIsImperial] = useState<boolean | null>(isImperialUnits(recipe));

  const classes = useStyles();

  const slug = recipe.title.replace(/[ ,]/g, "");

  useEffect(() => {
    setIsImperial(isImperialUnits(recipe));
  }, [slug]);

  const fromTheBook = recipe.origin === "The Book";

  return (
    <>
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
                <div className={classes.changeWarning}>
                  * The recipe servings have been changed. Prep time, cook time,
                  and specific cooking instructions may need to be altered.
                </div>
              ) : null}
            </div>
            <h4 className={classes.summary}>{recipe.summary}</h4>
          </div>
          <img
            className={classes.thumbnail}
            srcSet={
              fromTheBook ? "./pics/TheBook.jpg" : `./pics/${slug}/${slug}.jpg`
            }
          />
        </div>
        <div className={classes.recipeSection}>
          {recipe.origin ? (
            <a
              className={classes.originLink}
              href={fromTheBook ? undefined : recipe.origin}
              target="_blank"
              rel="noreferrer noopener"
            >
              Originally {fromTheBook ? "from The Book" : "seen here"}
            </a>
          ) : null}
          <div className={classes.changeScale}>
            Change recipe servings{" "}
            <input
              min={1}
              type="number"
              value={recipe.servings * multiplier}
              onChange={(e) =>
                e.target.value
                  ? setMultiplier(
                      parseInt(e.target.value, 10) / recipe.servings
                    )
                  : 1
              }
            />
          </div>
          <div className={classes.changeUnitsWrapper}>
            <div className={classes.changeUnits}>
              {isImperial === null ?
                <div className={classes.disabledText}>Mixed units, can't convert them</div> : (
                <>
                  <span>Imperial{" "}</span>
                  <Switch
                    aria-label="change units. on for metric, off for imperial"
                    checked={!isImperial}
                    checkedIcon={false}
                    onChange={() => {
                      setActiveRecipe(convertRecipeUnits(recipe, isImperial as boolean));
                      setIsImperial(!isImperial);
                    }}
                    height={20}
                    offColor="#ee52ff"
                    onColor="#9452ff"
                    uncheckedIcon={false}
                    width={48}
                  />
                  <span>{" "}Metric</span>
                  {recipe.converted ? (
                    <span className={`${classes.changeWarning} ${classes.unitChangedWarning}`}>
                      Units have been converted. Be careful of unconverted units in the recipe text
                    </span>
                  ) : null}
                </>
              )}
            </div>
          </div>
          <div className={classes.seperator}></div>
          <p className={classes.sectionHeader}>
            <strong>Ingredients</strong>
          </p>
          <ul className={classes.ingredients}>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>
                {ingredient.amount
                  ? parseIngredientAmount(ingredient.amount * multiplier)
                  : ""}
                {ingredient.unit ? `${ingredient.unit} ` : ""}
                {ingredient.slug ? (
                  <a
                    className={classes.recipeLink}
                    onClick={() => gotoRecipe(ingredient.slug as string)}
                    role="button"
                  >
                    {ingredient.name}
                  </a>
                ) : (
                  ingredient.name
                )}
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
      <div className={classes.closeIconWrapper}>
        <div className={classes.closeIcon} />
      </div>
    </>
  );
};

export default RecipeCard;
