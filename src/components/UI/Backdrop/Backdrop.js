import React from 'react';
import style from "./Backdrop.module.scss";

const Backdrop = props => props.show ? <div className={style.Backdrop} onClick={props.closed}></div> : null;

export default Backdrop
