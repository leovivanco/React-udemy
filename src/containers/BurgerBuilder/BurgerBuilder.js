import React, { useState, useEffect } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Spinner from "../../components/Spinner/Spinner";
import { CSSTransition } from "react-transition-group";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import "./style.scss";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseDisable, setPurchaseDisable] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (totalPrice > 0) {
      setPurchaseDisable(false);
    } else {
      setTotalPrice(0);
      setPurchaseDisable(true);
    }
  }, [totalPrice]);

  useEffect(() => {
    if (!ingredients) {
      axios
        .get("/ingredients.json")
        .then(response => {
          const ingredients = response.data;
          let price = totalPrice;
          for (const ingredient in ingredients) {
            if (ingredients.hasOwnProperty(ingredient)) {
              price += INGREDIENT_PRICES[ingredient] * ingredients[ingredient];
            }
          }
          setIngredients({ ...ingredients });
          setTotalPrice(price);
        })
        .catch(error => {
          setError(true);
          console.error(error);
        });
    }
  }, [totalPrice, ingredients]);

  const disableButton = ingredient => ingredients[ingredient] === 0;

  const addIngredientsHandler = type => {
    const oldCount = ingredients[type];
    const updatedCounted = oldCount + 1;
    const updateIngredients = {
      ...ingredients
    };
    updateIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;
    setIngredients(updateIngredients);
    setTotalPrice(newPrice);
  };

  const removeIngredientsHandler = type => {
    const oldCount = ingredients[type] > 0 ? ingredients[type] : 1;
    const updatedCounted = oldCount - 1;
    const updateIngredients = {
      ...ingredients
    };
    updateIngredients[type] = updatedCounted;
    const priceReduce = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceReduce;
    setIngredients(updateIngredients);
    setTotalPrice(newPrice);
  };

  const sendData = () => {
    setLoading(true);
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
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        setLoading(false);
        setShowModal(false);
      })
      .catch(error => {
        setLoading(false);
        setShowModal(false);
      });
  };

  const continueHandle = () => sendData();
  const cancelHandle = () => setShowModal(false);

  return (
    <Aux>
      <CSSTransition
        in={showModal}
        timeout={50}
        classNames="alert"
        unmountOnExit
      >
        <Modal show={true} hide={() => setShowModal(false)}>
          {loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={ingredients}
              totalPrice={totalPrice}
              continueHandle={continueHandle}
              cancelHandle={cancelHandle}
            />
          )}
        </Modal>
      </CSSTransition>
      {ingredients ? (
        <Aux>
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
      ) : (
        error ? <p>Ingredient can't be loaded!</p>:<Spinner />
      )}
    </Aux>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
