import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChangad, portionSize = 10}) => {

    let pagesCounte = Math.ceil (totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCounte; i++){
        pages.push(i);
    }

    
    let portionCount = Math.ceil(pagesCounte / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={cn(styles.paginator)}>
        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
            {pages
                .filter(pages => pages >= leftPortionPageNumber && pages<= rightPortionPageNumber)
                .map((pages) =>{
                    return <span className={ cn({
                        [styles.selectedPage]: currentPage === pages
                    }, styles.pageNumber)}
                        key={pages}
                        onClick={(e)=>{
                            onPageChangad(pages);
                        }}>{pages}</span>
                })}
        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
        }

    </div>

}

export default Paginator;
