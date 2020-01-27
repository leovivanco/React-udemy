import React from 'react';
import style from "./Backdrop.module.scss";

const Backdrop = props => props.show ? <div className={style.Backdrop} onClick={props.hide}></div> : null;

export default Backdrop
