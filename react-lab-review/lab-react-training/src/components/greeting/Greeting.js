import React from 'react'

export default function Greetings({lang, children}) {

    const greetingLang = () => {
        switch(lang) {
            case 'de':
                return 'Hallo';
            case 'en':
                return 'Hello';
            case 'es':
                return 'hola';
            case 'fr':
                return 'Bonjour';
        }
    };

    return (
        <div>
            <p>{greetingLang()} {children}</p>
        </div>
    )
}
