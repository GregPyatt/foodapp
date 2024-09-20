import styles from "./fooditem.module.css";
import { food } from "./interfaces.ts";

export default function FoodItem({
  food,
  setFoodId,
}: {
  food: food;
  setFoodId: (id: number) => void;
}) {
  console.log(food.image);
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
