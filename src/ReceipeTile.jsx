import React from 'react'
import './ReceipeTile.css';

const ReceipeTile = ({recipe}) => {
    const img_url = ()=>{
        // recipe["recipe"]["url"]
    }
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        != null && <div className="receipeTile">
            <img onClick={() => window.open(recipe["recipe"]["url"])} className="receipeTile__image" src={recipe["recipe"]["image"]} alt="" />
            <p onClick={() => window.open(recipe["recipe"]["url"])} className="receipeTile__name">{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default ReceipeTile


