import React from 'react'
import BuildControl from "./BuildControl/BuildControl";
import style from "./BuildControls.module.scss";

const BuildControls = props => {
    const controls = [
        {
            label: "Salad", type: "salad" 
        },
        {
            label: "Bacon", type: "bacon" 
        },
        {
            label: "Cheese", type: "cheese" 
        },
        {
            label: "Meat", type: "meat" 
        },
    ]
    return (
        <div className={style.BuildControls}>
            <p>Total: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {
                controls.map((item, index) => 
                <BuildControl  
                    key={item.label + index}
                    label={item.label}
                    type={item.type}
                    addIngredientsHandler={() => props.addIngredientsHandler(item.type)}
                    removeIngredientsHandler={() => props.removeIngredientsHandler(item.type)}
                    disableButton={props.disableButton(item.type)} 
                />)
            }
            <button disabled={props.purchaseDisable} className={style.OrderButton} onClick={() => props.setShowModal(true)}>Order Now</button>
        </div>
    )
}

export default BuildControls;
