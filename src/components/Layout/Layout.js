import React from 'react'
import Aux from '../../hoc/Aux';
import style from "./Layout.module.scss"

const Layout = props => {
    return (
        <Aux>
            <div>Header</div>
            <main className={style.Container}>{props.children}</main>
        </Aux>
    )
}

export default Layout;