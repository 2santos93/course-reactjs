import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from '../../Components/AddCategory'; 

describe('tests for AddCategory component', () => {
    
    let setCategoriesMock = jest.fn();    
    let wrapper = shallow(<AddCategory setCategories={setCategoriesMock}/>);

    beforeEach(() => {
        jest.clearAllMocks();

        setCategoriesMock = jest.fn();    
        wrapper = shallow(<AddCategory setCategories={setCategoriesMock}/>);
    });

    test('should render ok', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
   
    test('should show the value in the input', ()=>{
        const inputText = "Hi im goku";
        const input = wrapper.find('input');

        input.simulate('change', {target: {value: inputText}});
        const inputAfter = wrapper.find('input');

        expect(inputAfter.prop('value')).toBe(inputText);

    });

    test('shouldn\'t execute setCategories in submit event', () => {

        const form = wrapper.find('form');

        form.simulate('submit', {preventDefault(){}});

        expect(setCategoriesMock).not.toBeCalled();
    });

    test('should execute setCategories in submit event', () => {

        const inputText = "Hi im goku";
        const input = wrapper.find('input');

        input.simulate('change', {target: {value: inputText}});

        const form = wrapper.find('form');

        form.simulate('submit', {preventDefault(){}});

        const inputAfter = wrapper.find('input');

        expect(setCategoriesMock).toBeCalledTimes(1);
        expect(inputAfter.prop('value')).toBe('');
    });

});
