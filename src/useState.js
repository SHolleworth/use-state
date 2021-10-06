import { useReducer } from "react"

const useState = (initialState) => {

    const reducer = (state, action) => {
        return action
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return [state, dispatch]
}

export default useState