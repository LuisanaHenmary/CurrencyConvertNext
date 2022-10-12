import { useEffect, useCallback } from "react"
import { useFormikContext } from "formik"
import { getCurrencyConvert } from "../pages/api"
import { IconButton } from "@mui/material"
import SwapVertIcon from "@mui/icons-material/SwapVert"
import styled from "../styles/buttons.module.css"

const ExChangeButton = () => {
  const { values, setFieldValue } = useFormikContext()

  const currencyConversion = useCallback(async () => {
    const query = values.currency_in + "_" + values.currency_out
    const amount = values.amount_in !== "" ? parseFloat(values.amount_in) : 0

    try {
      const currency_value = await getCurrencyConvert(query)
      if (currency_value > -1) {
        const equivalence = amount * currency_value
        setFieldValue("amount_out", equivalence)
      }

      if (currency_value === -1) {
        setFieldValue("amount_out", "API does not work")
      }

    }
    catch (error) {
      console.log(error)
    }


  }, [values, setFieldValue])

  useEffect(() => {
    currencyConversion()
  }, [currencyConversion]);

  const exchange = () => {
    const vessel = values.currency_in
    setFieldValue("currency_in", values.currency_out)
    setFieldValue("currency_out", vessel)
  }

  return (
    <div
      className={styled.container_button}
    >
      <IconButton
        onClick={exchange}
        className={styled.exchange_button}
      >
        <SwapVertIcon />
      </IconButton>
    </div>
  )
}

export default ExChangeButton