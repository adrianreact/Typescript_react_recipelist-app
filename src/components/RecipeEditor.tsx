import React, { useState, useEffect } from "react";
import "./../styles/recipeEditor.css";

interface RecipeEditorInterface {
  saveNewRecipe: (name: string) => void;
  editorData: { id: string; name: string };
  saveEditedRecipe: (id: string, name: string) => void;
}

const RecipeEditor: React.FC<RecipeEditorInterface> = ({
  saveNewRecipe,
  editorData,
  saveEditedRecipe,
}) => {
  const [nameInputValue, setNameInputValue] = useState(editorData.name);
  console.log(editorData);

  useEffect(() => {
    setNameInputValue(editorData.name);
  }, [editorData]);

  const saveClickHandler = () => {
    if (editorData.id) {
      saveEditedRecipe(editorData.id, nameInputValue);
    } else {
      saveNewRecipe(nameInputValue);
    }
  };

  return (
    <div className="recipe-editor">
      <div className="form-single">
        <label htmlFor="recipe-name-input">Name</label>
        <input
          onChange={(e) => setNameInputValue(e.target.value)}
          type="text"
          id="recipe-name-input"
          value={nameInputValue}
        />
      </div>
      <button onClick={saveClickHandler} className="save-btn">
        Save
      </button>
    </div>
  );
};

export default RecipeEditor;
