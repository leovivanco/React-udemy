import React from "react";
import Button from "../UI/Button/Button";

const OrderSummary = props => {
    const { ingredients, totalPrice, continueHandle, cancelHandle } = props;
    const ingredientsKeys = Object.keys(ingredients);

    return (
        <div>
            <h1>Order Summary</h1>
            {ingredientsKeys.map((item, i) => (<li key={item+1}>
                {item} items: <strong>{ingredients[item]}</strong>
            </li>))}
            <p>Total: <strong>$ {totalPrice.toFixed(2)}</strong> </p>
            <Button type="Danger" click={cancelHandle}>Cancel</Button>
            <Button type="Success" click={continueHandle}>Continue</Button>
        </div>
    )
}

export default OrderSummary
