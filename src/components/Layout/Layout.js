import React from 'react'
import Aux from '../../hoc/Aux';
import style from "./Layout.module.scss"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const Layout = props => {
    return (
      <Aux>
        <Toolbar />
        <main className={style.Container}>{props.children}</main>
      </Aux>
    );
}

export default Layout;