import config from "../config";
import fetch from 'steamapi/src/utils/fetch'

export async function handler() {
    const API_KEY = config.steamApiKey
    const MY_STEAM_ID = "76561198080455667"
    const ENDPOINT_RECENT = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${API_KEY}&steamid=${MY_STEAM_ID}&format=json`

    function addCorsHeaders(returnObject) {
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept'
        }

        returnObject.headers = { ...returnObject.headers, ...corsHeaders }
        return returnObject
    }

    try {
        const response = await fetch(ENDPOINT_RECENT)
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            return addCorsHeaders({
                statusCode: response.status,
                body: response.statusText
            })
        }
        return addCorsHeaders({
            statusCode: 200,
            body: JSON.stringify((await response.json()).response.games)
        })
    } catch (err) {
        console.log(err) // output to netlify function log
        return addCorsHeaders({
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        })
    }
}

export default handler