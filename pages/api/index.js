export async function getSymbolsFixer() {
    try {
        const responce = await fetch(`http://data.fixer.io/api/symbols?access_key=d317504744fbd6b3fd5597ec25056c0b`)
        const info = await responce.json()
        const symbols = Object.keys(info.symbols)
        return symbols
    }
    catch (error) {
        console.log(error)
    }
}