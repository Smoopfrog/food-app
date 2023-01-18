import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <h3>{props.name}</h3>
      <span className={classes.description}>{props.description}</span>
      <span className={classes.price}>{props.price}</span>
    </li>
  );
};

export default MealItem;
