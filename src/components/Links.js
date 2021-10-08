import React from 'react';
import { Link } from 'wouter'

const CHARACTERS = [
    { firstName: 'Rick', lastNAme:'Sanchez'},
    { firstName: 'Beth', lastNAme:'Smith'},
    { firstName: 'Morty', lastNAme:'Smith'},
    { firstName: 'Summer', lastNAme:'Smith'},
    { firstName: 'Jerry', lastNAme:'Smith'}, 
    { firstName: 'nickelodeon ', lastNAme: '90'}
]

const Links = ({message}) => {
    return ( 
        <>
            <h3>{message}</h3>
            <div className="links">
                {
                    CHARACTERS.map( ({firstName, lastNAme}) => <Link to={`/gif/${firstName} ${lastNAme}`} > {firstName} <span>{lastNAme}</span> </Link>)
                }
            </div>
        </> 
     );
}
 
export default Links;