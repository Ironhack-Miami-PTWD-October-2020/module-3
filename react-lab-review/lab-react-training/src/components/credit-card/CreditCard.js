import React from 'react'

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const cardImgType = cardType => {
        return cardType.toLowerCase() === 'visa' ? 'visa.png' : 'master-card.svg';
    }

    const returnHiddenCardNumber = (str) => {
        let result = [];
        
        for(let i = 0; i < (str.length - 4); i++) {
            result.push("·")
            if(result.length === 4 || result.length === 9 || result.length === 14) {
            result.push(' ')
            }
        }

        result.push(str.slice(-4));

        return result.join('');
    }

    return (
        <div style={{backgroundColor: bgColor, color}}>
        <img style={{width: "1vw"}} src={`/img/${cardImgType(type)}`} />
        <h3>{returnHiddenCardNumber(number)}</h3>
        <p>Expires: {expirationMonth}/{expirationYear}  {bank}</p>
        <p>{owner}</p>
        </div>
    )
}
