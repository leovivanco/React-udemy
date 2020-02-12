import React, { useState, useEffect } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { CSSTransition } from 'react-transition-group';
import axios from "../../axios-orders";

import "./style.scss";

console.log(axios);
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseDisable, setPurchaseDisable] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
      if(totalPrice > 0) {
        setPurchaseDisable(false)
      }else{
        setTotalPrice(0)
        setPurchaseDisable(true);
      }
  }, [totalPrice])

  const disableButton = ingredient => {
    return ingredients[ingredient] === 0
  }

  const addIngredientsHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCounted = oldCount + 1;
    const updateIngredients = {
        ...ingredients
    }
    updateIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;
    setIngredients(updateIngredients);
    setTotalPrice(newPrice);
  }

  const removeIngredientsHandler = (type) => {
    const oldCount = ingredients[type] > 0 ? ingredients[type] : 1;
    const updatedCounted = oldCount - 1;
    const updateIngredients = {
        ...ingredients
    }
    updateIngredients[type] = updatedCounted;
    const priceReduce = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceReduce;
    setIngredients(updateIngredients);
    setTotalPrice(newPrice);
  }
  
  const sendData = () => {
    const order = {
      ingredients,
      totalPrice,
      customer: {
        name: "Leonardo",
        address: {
          street: "test 1",
          zipcode: "41351",
          country: "Brazil"
        }
      },
      deliveryMethod: "fastest"
    }
    axios
      .post("https://react-my-burger-28206.firebaseio.com/orders.json", order)
      .then(response => console.log(response))
      .catch(error => console.log(error));

  }

  const continueHandle = () => sendData();
  const cancelHandle = () => setShowModal(false);
 
  return (
    <Aux>
        
        <CSSTransition
            timeout={1000} 
            in={showModal}
            classNames="alert"
            unmountOnExit
        >
            <Modal show={showModal} hide={() => setShowModal(false)}>
                <OrderSummary 
                  ingredients={ingredients}
                  totalPrice={totalPrice}
                  continueHandle={continueHandle}
                  cancelHandle={cancelHandle}
                 />
            </Modal>
        </CSSTransition>
      <div>
        <Burger ingredients={ingredients} />
      </div>
      <div>
        <BuildControls 
            addIngredientsHandler={addIngredientsHandler}
            removeIngredientsHandler={removeIngredientsHandler}
            disableButton={disableButton}
            totalPrice={totalPrice}
            purchaseDisable={purchaseDisable}
            setShowModal={setShowModal}
        />
      </div>
    </Aux>
  );
};

export default BurgerBuilder;
