import { DataGrid } from "@mui/x-data-grid"
import styled from "../styles/Home.module.css"

const columns = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "amount_in", headerName: "Your Amount", width: 100, },
    { field: "currency_in", headerName: "From", width: 50 },
    { field: "amount_out", headerName: "Converted Amount", width: 140 },
    { field: "currency_out", headerName: "To", width: 30 },
    { field: "date", headerName: "Date", width: 500 }
]

const TableTransactions = ({ transactions }) => {
    return (
        <div
            className={styled.container_table}
        >
            <DataGrid
                rows={transactions}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}

export default TableTransactions