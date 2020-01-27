import React from 'react'

const OrderSummary = props => {
    const { ingredients, totalPrice } = props;
    const ingredientsKeys = Object.keys(ingredients);

    return (
        <div>
            <h1>Order Summary</h1>
            {ingredientsKeys.map((item, i) => (<li key={item+1}>
                {item} items: <strong>{ingredients[item]}</strong>
            </li>))}
            <p>Total: <strong>$ {totalPrice}</strong> </p>
        </div>
    )
}

export default OrderSummary
