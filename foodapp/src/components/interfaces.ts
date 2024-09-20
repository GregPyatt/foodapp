export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  vegetarian: boolean;
  vegan: boolean;
  pricePerServing: number;
  analyzedInstructions: analyzedInstruction[];
  extendedIngredients: item[];
  // Add other properties as needed
}

export interface food {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  vegetarian: boolean;
  vegan: boolean;
  pricePerServing: number;
  analyzedInstructions: analyzedInstruction[];
  extendedIngredients: item[];
  // Add other properties as needed
}

export interface analyzedInstruction {
  name: string;
  steps: step[];
}

export interface step {
  number: number;
  step: string;
}

export interface item {
  name: string;
  image: string;
  amount: number;
  unit: string;
}
