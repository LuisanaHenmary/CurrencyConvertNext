import {
    Select,
    MenuItem,
    TextField,
    Box,
    Alert
} from "@mui/material"
import { useField } from "formik"
import styled from "../styles/form.module.css"

const SelectMenu = ({ options, ...props }) => {
    const [field] = useField(props)
    return (
        <Select
            className={styled.select_form}
            {...field}
            {...props}
        >
            {
                options.map((option, index) =>
                    <MenuItem
                        key={index}
                        value={option}
                    >
                        {option}
                    </MenuItem>
                )
            }
        </Select>
    )
}


const FieldMoney = ({ currencies, choice, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <Box
            component="div"
            className={styled.container_form}
        >
            <TextField
                {...field}
                {...props}
            />

            <SelectMenu
                options={currencies}
                name={choice}
            />

            {
                meta.touched || meta.error ? (
                    meta.error === undefined ?
                        null :
                        <Alert
                            severity="error"
                        >
                            {meta.error}
                        </Alert>
                ) : null
            }
        </Box>
    )
}

export default FieldMoney