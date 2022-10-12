import { useContext } from "react"
import { Container, Alert, AlertTitle } from "@mui/material"
import { getSymbolsFixer } from "./api"
import FormConvert from "../Layouts/FormConvert"
import { ListContext } from "../Contexts/ContextList"
import TableTransactions from "../Components/Transactions"

const Home = ({ data }) => {
  const { list } = useContext(ListContext)

  return (
    <Container>
      {data.length === 0 ?
        <Alert severity="error" >
          <AlertTitle>Error with the API</AlertTitle>
          Symbols could not be loaded - <strong>There was a problem calling the api.</strong>
        </Alert>
        :
        <FormConvert currency_options={data} />}
      <TableTransactions transactions={list} />
    </Container>
  )
}

export async function getStaticProps() {
  try {
    const data = await getSymbolsFixer()
    return {
      props: {
        data
      }
    }
  }
  catch (error) {
    console.log(error)
  }

}
export default Home
