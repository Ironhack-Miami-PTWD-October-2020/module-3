import React from 'react';
import Rating from '../rating/Rating';

export default function DriverCard({name, rating, img, car}) {
    return (
        <div>
            <img style={{width: "7vw"}} src={img} />
            <div>
                <h3>{name}</h3>
                <p><Rating>{rating}</Rating></p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}
