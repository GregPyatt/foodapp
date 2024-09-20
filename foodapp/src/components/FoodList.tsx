import FoodItem from "./FoodItem";
import { Recipe } from "./interfaces.ts";

export default function FoodList({
  foodData,
  setFoodId,
}: {
  foodData: Recipe[] | null;
  setFoodId: (id: number) => void;
}) {
  return (
    <div>
      {foodData?.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
