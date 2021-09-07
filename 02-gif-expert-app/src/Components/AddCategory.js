import PropTypes from 'prop-types';
import { useState } from "react";

const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const inputHandler = (e) => {
        const value = e.target.value;
        setinputValue(value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length <= 2) return;

        setCategories( (categories) => [inputValue, ...categories]);
        setinputValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                value={inputValue}
                onChange={inputHandler}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;
