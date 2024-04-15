import React from 'react'
import { FieldValues, SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { FormContext } from '../contexts/FormContext';
import FormInput from './FormInput'
import FormButton from './FormButton';

interface FormProps{
    children : React.ReactNode;
    onSubmit : SubmitHandler<FieldValues>
    className ?: string
}


export default function Form({children, onSubmit, className}:FormProps) {
    const {
        register, 
        handleSubmit,
        formState : {isSubmitting}
    } = useForm<FieldValues>()
    const submit : SubmitHandler<FieldValues> = async(data)=>{
        await onSubmit(data)
    }


  return (
    <FormContext.Provider value = {{register, isSubmitting}}>
        <form onSubmit={handleSubmit(submit)} className={className}>
            {children}
        </form>
    </FormContext.Provider>
  )

}

Form.Input = FormInput
Form.Button = FormButton