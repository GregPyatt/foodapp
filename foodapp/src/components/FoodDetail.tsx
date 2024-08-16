import styles from "./fooddetail.module.css";
import { useEffect, useState } from "react";

interface food {
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

interface analyzedInstruction {
  name: string;
  steps: step[];
}

interface step {
  number: number;
  step: string;
}

interface item {
  name: string;
  image: string;
  amount: number;
  unit: string;
}

export default function FoodDetail({ foodId }: { foodId: string }) {
  const [food, setFood] = useState({} as food);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data: food = await res.json();
        console.log(data);
        setFood(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchFood();
  }, [foodId]); // This dependency array tells the useEffect hook to run whenever the foodId changes.

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕙 {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👦 <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
          <span>
            💲
            <strong>
              {(food.pricePerServing / 100).toFixed(2)} Per serving
            </strong>
          </span>
        </div>
        <div>
          <h2>Ingredients</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.extendedIngredients.map((item) => (
              <div>
                <img
                  src={
                    `https://spoonacular.com/cdn/ingredients_100x100/` +
                    item.image
                  }
                  alt=""
                />
                <h3>{item.name}</h3>
                <h3>
                  {item.amount} {item.unit}
                </h3>
              </div>
            ))
          )}

          <h2>Instructions</h2>
          <div className={styles.recipeInstructions}>
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
