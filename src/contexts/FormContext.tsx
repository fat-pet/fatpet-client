import { createContext, useContext } from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

interface FormContextInterface {
  register: UseFormRegister<FieldValues>;
  isSubmitting: boolean;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

export const FormContext = createContext<FormContextInterface | undefined>(
  undefined,
);

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  return context;
};
