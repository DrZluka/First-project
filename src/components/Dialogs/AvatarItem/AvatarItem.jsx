import React from "react";
import s from "./AvataraItem.module.css";


const AvataraItem = (props) => {
    return <div className={s.avatar}> <img scr= {props.avatar}/></div>
}


export default AvataraItem;