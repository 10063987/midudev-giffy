import React from 'react';
import Gifs from './Gifs';
import {useGifs}  from '../hooks/useGifs'


const ListOfGifs = ({ params = '' }) => {
    const { topic } = params
    console.log(`topic: ${topic}`)
    const { gifs } = useGifs(topic)

    return ( 
      <>

        <div className="list-of-gifs">
          { gifs.map( ({ title, id, url }) => 
              <Gifs 
                title={ title } 
                id={ id } 
                url={ url }
                key={ id }
              />)
          }
        </div>
      </>
     );
}
 
export default ListOfGifs; 