import React, { useState } from 'react';
import { useLocation } from 'wouter';
import Links from '../../components/Links';
import ListOfGifs from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';


const Home = () => {

    const [keyword, setKeyword] = useState('')
    const [currentPath, pushNextLocation] = useLocation()

    const {gifs} = useGifs()

    const handleSubmit = (e) =>{
        e.preventDefault()
        pushNextLocation(`/gif/${keyword}`)
        setKeyword('')
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return ( 
        <div className="Home">
            <form
                onSubmit={ handleSubmit}
            >
                <input 
                    type="text" 
                    value={keyword} 
                    placeholder="Buscar..." 
                    onChange={ handleChange }
                />
            </form>
            
            <Links message='Gifs populares' />

            <h3> Última busqueda</h3>
            <ListOfGifs />
        </div>
     );
}
 
export default Home;