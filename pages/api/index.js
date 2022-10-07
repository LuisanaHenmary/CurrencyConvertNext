export async function getSymbolsFixer() {
    try {
        const responce = await fetch(`http://data.fixer.io/api/symbols?access_key=${process.env.FIXER_KEY}`)
        const info = await responce.json()
        const symbols = Object.keys(info.symbols)
        return symbols
    }
    catch (error) {
        console.log(error)
    }
}