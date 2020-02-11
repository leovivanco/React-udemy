import React from 'react'
import style from "./Toolbar.module.scss";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
    return (
      <header className={style.Toolbar}>
        <DrawerToggle clicked={props.setShowSideDrawer} />
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </header>
    );
}

export default Toolbar
