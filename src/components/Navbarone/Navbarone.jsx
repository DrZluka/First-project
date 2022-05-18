import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbarone.module.css';


const Navbarone = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink>
            </div >
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Setting" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Friends" activeClassName={s.activeLink}>Friends</NavLink>  
            </div>
            <div className={s.item}>
                <NavLink to="/Users" activeClassName={s.activeLink}>Users</NavLink>  
            </div>

        </nav>
    )
}

export default Navbarone;