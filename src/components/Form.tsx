import React, { useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormContext } from '../contexts/FormContext';
import FormInput from './FormInput'
import FormButton from './FormButton';
import FormSmallButton from './FormSmallButton';

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

    const [duplicateName, setDuplicateName] = useState<boolean | string>('');
    const [duplicateId, setDuplicateId] = useState<boolean | string>('');
    useEffect(()=>{
        console.log(duplicateName)
    },[duplicateName])

  return (
    <FormContext.Provider value = {{register, isSubmitting, errors, watch, duplicateId, duplicateName, setDuplicateName, setDuplicateId}}>
        <form onSubmit={handleSubmit(submit)} className={className}>
            {children}
        </form>
    </FormContext.Provider>
  )

}

Form.Input = FormInput
Form.Button = FormButton
Form.SmallButton = FormSmallButton