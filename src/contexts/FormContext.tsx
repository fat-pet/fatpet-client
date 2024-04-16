import { createContext, useContext } from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface FormContextInterface {
    register: UseFormRegister<FieldValues>;
    isSubmitting : boolean;
    errors : FieldErrors<FieldValues>;
  }

export const FormContext = createContext<FormContextInterface | undefined>(undefined);

export const useFormContext = () => {
    const context = useContext(FormContext);
  
    if (!context) {
      throw new Error("useFormContext must be used within a FormProvider");
    }
  
    return context;
  };

