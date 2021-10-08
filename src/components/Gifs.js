import React from 'react';
import { Link } from 'wouter'


const Gifs = ({ title, id, url }) => {
    return ( 
        <div className="gif-card">
            <Link to={"/detail/" + id } className="gif-title">{title}</Link>
            <img className="gif-image" src={url} alt={title} />
        </div>
     );
}
 
export default Gifs;