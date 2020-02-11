import React from 'react'
import style from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux"

const Modal = props => {
    return (
        <Aux>
            <div className={style.Modal}>
                {props.children}
            </div>
            <Backdrop show={props.show} closed={props.hide} />
        </Aux>
    )
}

export default Modal
