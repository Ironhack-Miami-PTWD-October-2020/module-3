import React from 'react'

export default function Rating({children}) {
    const starDisplay = () => {
        let result = [];
        for(let i = 0; i < 5; i++) {
            if(i >= Math.round(children)) {
                // result.push('☆');
                result.push('\u2606');
            } else {
                // result.push('★');
                result.push('\u2605');
            }
        }

        return result.join('');
    }

    return (
        <div>
            <p>{starDisplay()}</p>
        </div>
    )
}
