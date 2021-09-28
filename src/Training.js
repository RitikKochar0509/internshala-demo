import React from 'react'
import './Training.css'
function Training({source,title}) {
    return (
        <div className = 'training'>
             <img src={source} alt="" />
            <p>{title}</p>

        </div>
    )
}

export default Training
