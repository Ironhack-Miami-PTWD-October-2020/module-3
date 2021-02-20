import React from 'react'

export default function BoxColor({r, g, b}) {
    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(red, green, blue) {
        return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
    }

    // alternative method to convert rgb to hex
    // function rgbToHex(r, g, b) {
    //     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    // }

    return (
        <div style={{width: "40vw", height: "10vw", backgroundColor: `rgb(${r},${g},${b})`, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: 'center', fontSize: '1.2em', lineHeight: "1px", border: "1px solid black"}}>
            <p>rgb({r},{g},{b})</p>
            <p>{rgbToHex(r, g, b)}</p>
        </div>
    )
}
