import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import { Recipe } from "./components/interfaces";
import Container from "./components/Container";
import InnerContainer from "./components/Container";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState<Recipe[] | null>(null); // Assuming an array of recipes
  const [foodId, setFoodId] = useState<string>("658615");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
