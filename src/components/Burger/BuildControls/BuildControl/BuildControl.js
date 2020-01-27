import React from 'react'
import style from './BuildControl.module.scss';

const BuildControl = props => {
    return (
        <div className={style.BuildControl}>
            <div className={style.Label}>{props.label}</div>
            <button className={style.Less} onClick={props.removeIngredientsHandler} disabled={props.disableButton} >Less</button>
            <button className={style.More} onClick={props.addIngredientsHandler}>More</button>
            
        </div>
    )
}

export default BuildControl;
