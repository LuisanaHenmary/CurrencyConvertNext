import { Select, MenuItem , TextField, Box } from "@mui/material"
import { useField } from "formik"

const SelectMenu = ({ options,...props }) => {
    const [field] = useField(props)
    return (
        <Select {...field} {...props} >
            {options.map((option,index)=><MenuItem key={index} value={option}>
                {option}
            </MenuItem>)}
        </Select>
    )
}


const FieldMoney = ({ currencies, choice, ...props }) => {
    const [field] = useField(props)
    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px"
            }}>
            <TextField
                {...field}
                {...props}
            />
            <SelectMenu options={currencies} name={choice} />
        </Box>
    )
}

export default FieldMoney