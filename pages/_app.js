import "../styles/globals.css"
import { ListProvider } from "../Contexts/ContextList"

function MyApp({ Component, pageProps }) {

  return (
    <ListProvider>
      <Component {...pageProps} />
    </ListProvider>
  )
}

export default MyApp
