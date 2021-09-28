import React from 'react'
import './cities.css'
function Cities({source,title}) {
    return (
        <div className = 'citites'>
            
             <img src={source} alt="" />
            <p>{title}</p>

            
        </div>
    )
}

export default Cities
