import React, { useState } from "react";
import Aux from '../../hoc/Aux/Aux';
import style from "./Layout.module.scss"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    return (
      <Aux>
        <Toolbar setShowSideDrawer={() => setShowSideDrawer(true)} />
        <SideDrawer
          open={showSideDrawer}
          closed={() => setShowSideDrawer(false)}
        />
        <main className={style.Container}>{props.children}</main>
      </Aux>
    );
}

export default Layout;