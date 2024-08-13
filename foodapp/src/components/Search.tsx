import { useState, useEffect } from "react";

interface Recipe {
  // Define the shape of your recipe data here based on the API response
  id: number;
  title: string;
  image: string;
  // Add other properties as needed
}

const URL = "https://api.spoonacular.com/recipes/complexSearch";


export default function Search() {
  //const [query, setQuery] = useState("pizza");
  const [query, setQuery] = useState<string>("pizza");
  const [data, setData] = useState<Recipe[] | null>(null); // Assuming an array of recipes

  useEffect(() => {
    async function fetchFood() {
      try {
        const res: Response = await fetch(
          `${URL}?query${query}&apiKey=${API_KEY}`
        );
        const data: Recipe[] = await res.json();
        // in the lesson, this is set to data.recipes.
        // But here I'm taking advice from Gemini to properly annotate all types according to TypeScript.
        setData(data);
        console.log(query);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchFood(); //Be sure that this is called OUTSIDE of the async function.
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
