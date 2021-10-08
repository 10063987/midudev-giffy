import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';


/**
 * useGifs takes a topic and run an effect that invokes the getGifs service which makes the API Request to Giphy
 * @param {string} topic 
 * @returns gifs object
 */
export function useGifs ( topic = null )  {  
    const [gifs, setGifs] = useState([])
    
    // Recuperar keyword de localStorage
    const keywordToUse = topic || localStorage.getItem('lastKeyword')

    console.log(`To use: ${keywordToUse}`)
    useEffect( () => { 
        getGifs( keywordToUse )
        .then( gifs => {
            setGifs(gifs)
            // Guardar keyword en localStorage
            localStorage.setItem('lastKeyword', topic)
        })
    }, [topic, keywordToUse])

    return {gifs}
}

