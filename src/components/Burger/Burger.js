import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import style from "./Burger.module.scss";

const Burger = props => {
  const { ingredients } = props;
  const renderTextDefaultText = text => <p>{text}</p>;
  const renderIngredients = () => {
    return Object.keys(ingredients)
      .map(igKey => {
        return [...Array(ingredients[igKey])].map((_, i) => (
          <BurgerIngredients key={igKey + i} type={igKey} />
        ));
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
  };
  return (
    <div className={style.Burger}>
      <BurgerIngredients type="bread-top" />
      {
        Object.keys(ingredients).length > 0 &&
        Object.values(ingredients).find(a => a > 0)
          ? renderIngredients()
          : renderTextDefaultText("Please Add Ingredients!!!")
      }
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
