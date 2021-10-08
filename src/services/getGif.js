const APIKey = `nMLKWR4DB90dZHyn3njZFFERQgYiW0og`  

export default function getGif({id = ''} = {}){
    const APIUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=${APIKey}`
    console.log(`APIKey ${APIKey}`)

    return fetch(APIUrl)
        .then( res =>  {
            if(!res.ok){
                console.log('ERROR - ERROR - ERROR')
            }
            return res.json()
        } )
        .then( response => {
            const { data } = response
            const {id, title, images} = data
            const {url} = images.downsized_medium
            return {id, title, url}
        })
        .catch( err => console.log(`ERROR - ERROR - ERROR - ${err}`) )
} 