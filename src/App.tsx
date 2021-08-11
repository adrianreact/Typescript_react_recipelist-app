import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeEditor from "./components/RecipeEditor";
import AddRecipe from "./components/AddRecipe";
import { RecipeModel } from "./recipe.model";
import "./styles/App.css";

let idCounter = 0;

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeModel[]>(initialRecipes);
  const [openedEditor, setOpenedEditor] = useState<boolean>(false);
  const [editorData, setEditorData] = useState<{ id: string; name: string }>({
    id: "",
    name: "",
  });

  console.log(recipes);

  const openStarterEditor = () => {
    setEditorData({
      id: "",
      name: "Starter",
    });
    setOpenedEditor(true);
  };

  const saveNewRecipe = (name: string) => {
    idCounter++;
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      {
        id: idCounter.toString(),
        name,
        ingredients: [],
        steps: [],
        time: "",
      },
    ]);
    setOpenedEditor(false);
  };

  const removeRecipe = (id: string) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
    setOpenedEditor(false);
  };

  const openRecipeEditor = (id: string, name: string) => {
    setEditorData({
      id,
      name,
    });
    setOpenedEditor(true);
  };

  const saveEditedRecipe = (id: string, name: string) => {
    setRecipes((prevRecipes) => {
      return [...prevRecipes].reduce<RecipeModel[]>((acc, curr) => {
        if (curr.id === editorData.id) {
          curr.name = name;
        }
        acc.push(curr);
        return acc;
      }, []);
    });
    setOpenedEditor(false);
  };

  return (
    <div className="App">
      <AddRecipe openStarterEditor={openStarterEditor} />
      <div className="main-part">
        <RecipeList
          recipes={recipes}
          removeRecipe={removeRecipe}
          openRecipeEditor={openRecipeEditor}
        />
        {openedEditor && (
          <RecipeEditor
            editorData={editorData}
            saveNewRecipe={saveNewRecipe}
            saveEditedRecipe={saveEditedRecipe}
          />
        )}
      </div>
    </div>
  );
};

export default App;

const initialRecipes = [
  {
    id: "0",
    name: "Pierogi",
    ingredients: [
      { name: "Maka", amount: "100g", category: "dry" },
      { name: "Woda", amount: "200ml", category: "drinks" },
      { name: "Kurczak", amount: "150g", category: "meat" },
    ],
    steps: ["Ugniec ciasto", "Dodaj mieso", "Wrzuc do wody"],
    time: "5h",
  },
];
