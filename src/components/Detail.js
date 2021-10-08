import React, {useState, useEffect} from 'react';
import getGif from '../services/getGif';


const Detail = ({params}) => {
    const {id} = params
    const [gif, setGif] = useState({})

    useEffect( () => {
        getGif({id})
            .then( gif => {
                console.log( gif )
                setGif(gif)
            })
    }, [id])

    const {title, url} = gif
    console.log(url)

    return ( 
        <div className="single-gif" >
            <h2>{title}</h2>
            <picture>
                <img className="gif-image" alt={title} src={url} />
            </picture>
        </div>
     );
}
 
export default Detail;