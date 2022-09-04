import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handlingNavigation from "../../Utils/handlingNavigation";
import styles from "./Navbar.module.css";
import homeIcon from "../../Assets/homeIcon.svg";
import menuIcon from "../../Assets/menuIcon.svg";
import userIcon from "../../Assets/userIcon.png"
const Navbar = () => {
    const navigate = useNavigate();
    const [menuDrawer, setMenuDrawer] = useState("0");
    return (
        <>
            <div className={styles.navbarContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.homeContainer}>
                        <img className={styles.home} onClick={(e: any) => handlingNavigation("/newPage", navigate)} src={homeIcon} />
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.userContainer}>
                        <img className={styles.user} src={userIcon} />
                    </div>
                    <div className={styles.menuContainer}>
                        <img className={styles.menu} src={menuIcon} onClick={e => setMenuDrawer("1")} />
                    </div>
                    <div className={styles.sidenav}>
                            <div className={menuDrawer === "1" ? styles.sidenavOpen : styles.sidenavClose}>
                                <a className={styles.closebtn} onClick={e => setMenuDrawer("0")}>&times;</a>
                                <a href="#">About</a>
                                <a href="#">Services</a>
                                <a href="#">Clients</a>
                                <a href="#">Contact</a>
                            </div>
                        </div>

                </div>
            </div>
        </>)
        ;

}
export default Navbar;