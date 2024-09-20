import Item from "./Item";
import { food } from "./interfaces.ts";

export default function ItemList({
  food,
  isLoading,
}: {
  food: food;
  isLoading: boolean;
}) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
