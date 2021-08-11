import React from "react";
import "./../styles/RecipeList.css";

interface RecipeListInterface {
  recipes: {
    id: string;
    name: string;
    ingredients: {
      name: string;
      amount: string;
      category: string;
    }[];
    steps: string[];
    time: string;
  }[];
  removeRecipe: (id: string) => void;
  openRecipeEditor: (id: string, name: string) => void;
}

const RecipeList: React.FC<RecipeListInterface> = ({
  recipes,
  removeRecipe,
  openRecipeEditor,
}) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="single-recipe">
            <div className="recipe-name">{recipe.name}</div>
            <div className="info">
              <div className="info-pane">
                <div className="time">
                  <b>Preparation time:</b> {recipe.time}
                </div>
                <b>Ingredients:</b>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <div key={ingredient.name} className="single-ingredient">
                      <div className="ingredient-name">-{ingredient.name}</div>
                    </div>
                  );
                })}
              </div>
              <div className="info-pane">
                <b>Steps:</b>
                {recipe.steps.map((step) => {
                  return (
                    <div key={step} className="single-step">
                      -{step}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="edit-panel">
              <button
                onClick={openRecipeEditor.bind(null, recipe.id, recipe.name)}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                onClick={removeRecipe.bind(null, recipe.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
