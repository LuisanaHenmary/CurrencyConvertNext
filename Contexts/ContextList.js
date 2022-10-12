import { createContext, useState } from "react"

export const ListContext = createContext()

export const ListProvider = ({ children }) => {
    const [list, setList] = useState([])
    const [index, setIndex] = useState(1)

    const addItem = (values) => {

        const date = new Date()

        setList([
            ...list,
            {
                ...values,
                id: index,
                date
            }
        ])

        setIndex(index + 1)
    }

    return (
        <ListContext.Provider value={{
            list,
            addItem,
        }} >
            {children}
        </ListContext.Provider>
    )
}