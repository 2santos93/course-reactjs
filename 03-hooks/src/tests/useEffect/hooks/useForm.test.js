import {act, renderHook} from '@testing-library/react-hooks'
import { useForm } from "../../../components/useEffect/hooks/useForm"

describe('test for useForm Hook', () => {
  
  const initialForm = {
    name: 'nelson',
    email: 'nelsoncaicedod1@gmail.com'
  }

  test('should return a default form', () => {

    const {result} = renderHook(() => useForm(initialForm));
    const [stateForm] = result.current;

    expect(stateForm).toEqual(initialForm);

  })

  test('should change the form values', () => {
    
    const {result} = renderHook(() => useForm(initialForm));
    const newFormData = {
      name: {
        name: 'name',
        value: 'Alejandro'
      },
      email: {
        name: 'email',
        value: 'alejandro@gmail.com'
      }
    }
    

    const [, onChangeHandler] = result.current;


    act(() => {
      onChangeHandler({
        target: newFormData.name
      });

      onChangeHandler({
        target: newFormData.email
      })
    })

    const [stateForm] = result.current;

    expect(stateForm).toEqual({name: newFormData.name.value, email: newFormData.email.value});

  })
  
})
