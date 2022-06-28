import React from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";

export const ItemListContainer = ({Lista}) => {
    return(
        <>
            <h1>{Lista}</h1>

            <ItemCount stock={5}/>
        </>
    )
}