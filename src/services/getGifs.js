// API constants
const APIKey = `nMLKWR4DB90dZHyn3njZFFERQgYiW0og`  

// {topic = 'Morty'} = {}



export default function getGifs(topic){

    let ran = Math.floor(Math.random() * (20 - 1 + 1) + 1)

    const APIUrl = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${topic}&limit=3&offset=${ran}&rating=r&lang=en`


    return fetch(APIUrl)
        .then( res =>  {
            if(!res.ok){
                console.log('ERROR - ERROR - ERROR')
            }
            return res.json()
        } )
        .then( response => {
            const { data } = response
            const gifs = data.map( image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        })
        .catch( err => console.log(`ERROR - ERROR - ERROR - ${err}`) )
} 