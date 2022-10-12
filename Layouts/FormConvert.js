import * as Yup from "yup"
import { useContext } from "react"
import { Container, Button } from "@mui/material"
import { Form, Formik } from "formik"
import FieldMoney from "../Components/FieldMoney"
import ExChangeButton from "../Components/ExchangeButton"
import { ListContext } from "../Contexts/ContextList"
import styled from "../styles/buttons.module.css"

const FormConvert = ({ currency_options }) => {

    const { addItem } = useContext(ListContext)

    return (
        <Container
            component={Formik}

            initialValues={{
                amount_in: 0,
                currency_in: "PHP",
                amount_out: 0,
                currency_out: "USD"

            }}

            validationSchema={Yup.object({
                amount_in: Yup
                    .number()
                    .required("Requerid")
                    .typeError("Enter a number")
                    .min(1, "The minimum value is 1")
                    .max(1000, "The maximum value is 1000"),
                amount_out: Yup.number()
                    .typeError("Can't convert due to API issues")
            })}

            onSubmit={(values, { resetForm }) => {
                addItem(values)
                resetForm();
            }}
        >
            <Form>
                <FieldMoney
                    currencies={currency_options}
                    type="text"
                    name="amount_in"
                    choice="currency_in"
                    label="In"
                />
                <ExChangeButton />
                <FieldMoney
                    currencies={currency_options}
                    name="amount_out"
                    choice="currency_out"
                    label="Out"
                    disabled
                />

                <div
                    className={styled.container_button}
                >
                    <Button
                        type="submit"
                        className={styled.submit_button}
                    >
                        Confirm
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default FormConvert