import React from 'react'

export default function Random({ min, max }) {


    return (
        <div>
            <p>Random number between { min } and { max } => { Math.floor(Math.random() * max) + min }</p>        
        </div>
    )
}
