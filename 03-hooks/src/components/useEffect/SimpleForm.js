import { useEffect } from "react";
import { useForm } from "./hooks/useForm";

import './index.css';
import { Message } from "./Message";

const SimpleForm = (initialState) => {

    const [state, onChangeHandler, onSubmitHandler] = useForm(initialState);

    const {name, email} = state;
    
    useEffect(() => {
        console.log('Component did mount');
    }, []);

    return (
            
        <form onSubmit={onSubmitHandler}>
            <div className='form-group'>
                <label htmlFor="email" >Email</label>
                <input 
                    type="email" 
                    name="email"
                    onChange={onChangeHandler}
                    placeholder="test@test.com"
                    value={email}
                    id="email"
                    className="form-control"
                />
            </div>         
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name"
                    onChange={onChangeHandler}
                    placeholder="name"
                    value={name}
                    id="name"
                    className="form-control"
                />
            </div>   

            {(email.includes('goku')) && <Message />}      

            <button 
                type="submit"
                className= "btn btn-primary"
            >
                Send
            </button>
        </form>
    )
}

export default SimpleForm;