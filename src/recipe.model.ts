export interface RecipeModel {
  id: string;
  name: string;
  ingredients: {
    name: string;
    amount: string;
    category: string;
  }[];
  steps: string[];
  time: string;
}
