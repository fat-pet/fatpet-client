import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormContext } from '../contexts/FormContext';
import FormInput from './FormInput'
import FormButton from './FormButton';
import FormSmallButton from './FormSmallButton';
import FormDupInput from './FormDupInput';


interface FormProps{
    children : React.ReactNode;
    onSubmit : (data: any)=>void;
    className ?: string
}


export default function Form({children, onSubmit, className}:FormProps) {
    const {
        register, 
        handleSubmit,
        formState : {isSubmitting, errors},
        watch
    } = useForm<FieldValues>()
    const submit : SubmitHandler<FieldValues> = (data)=>{
         onSubmit(data)
    }
  return (
    <FormContext.Provider value = {{register, isSubmitting, errors, watch}}>
        <form onSubmit={handleSubmit(submit)} className={className}>
            {children}
        </form>
    </FormContext.Provider>
  )

}

Form.Input = FormInput
Form.Button = FormButton
Form.SmallButton = FormSmallButton
Form.DupInput = FormDupInput