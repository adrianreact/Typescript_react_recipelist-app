import React from "react";
import "./../styles/AddRecipe.css";

interface AddRecipeInterface {
  openStarterEditor: () => void;
}

const AddRecipe: React.FC<AddRecipeInterface> = ({ openStarterEditor }) => {
  return (
    <button onClick={openStarterEditor} className="add-recipe">
      Add new recipe
    </button>
  );
};

export default AddRecipe;
