import React from 'react'
import style from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux"

const Modal = props => {
    return (
        <Aux>
            {console.log(props)}
            <div className={style.Modal}>
                {props.children}
            </div>
            <Backdrop show={props.show} hide={props.hide} />
        </Aux>
    )
}

export default Modal
