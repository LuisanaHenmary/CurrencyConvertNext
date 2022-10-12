import axios from "axios"
const fixer_api = process.env.NEXT_PUBLIC_FIXER_KEY
const curr_api = process.env.NEXT_PUBLIC_CURR_CONV_KEY

export async function getSymbolsFixer() {
    try {
        const responce = await axios.get("http://data.fixer.io/api/symbols", { params: { access_key: fixer_api } })
        const symbols = Object.keys(responce.data.symbols)
        return symbols
    }
    catch (error) {
        console.log(error)
        return []
    }
}

export async function getCurrencyConvert(query) {
    try {
        const resp = await axios.get("https://free.currconv.com/api/v7/convert", {
            params: {
                q: query,
                compact: "ultra",
                apiKey: curr_api
            }
        })
        return resp.data[query]
    }
    catch (error) {
        return -1
    }
}