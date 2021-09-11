import { useState } from "react"

export const useForm = (initialState={}) => {
    const [state, setState] = useState(initialState);
    
    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(e);
    // }

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setState((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    return [state, onChangeHandler];
}
