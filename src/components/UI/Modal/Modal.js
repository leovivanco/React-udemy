import React from 'react'
import style from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux"

const Modal = props => {
    return (
        <Aux>
            <Backdrop show={props.show} hide={props.hide} />
            <div className={style.Modal}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal
