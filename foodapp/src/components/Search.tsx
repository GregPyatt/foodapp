import { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { Recipe } from "./interfaces";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_APP_SPOONACULAR_API_KEY;

export default function Search({
  foodData,
  setFoodData,
}: {
  foodData: Recipe[] | null;
  setFoodData: (data: Recipe[]) => void;
}) {
  const [query, setQuery] = useState<string>("pizza");

  useEffect(() => {
    async function fetchFood() {
      try {
        const res: Response = await fetch(
          `${URL}?query=${query}&apiKey=${API_KEY}`
        );
        console.log(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data: { results: Recipe[] } = await res.json();
        // But here I'm taking advice from Gemini to properly annotate all types according to TypeScript.
        setFoodData(data.results);
        //console.log(query);
        //console.log(data);
        //console.log("Data results are: ");
        //console.log(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchFood(); //Be sure that this is called OUTSIDE of the async function.
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        //onBlur={(e) => setQuery(e.target.value)}
        //onChange={(e) => console.log("New value: " + e.target.value)}
        type="text"
      />
    </div>
  );
}
