import React from 'react';
import { useFormContext } from '../contexts/FormContext';
import InputError from './InputError';
import { useDupStore } from '@/stores/useStore';

interface FormInputProps {
  name?: string; // Input 위에 이름
  type?: 'text' | 'password' | 'email' | 'number';
  minLen?: number; // 최소 글자 수
  maxLen?: number; // 최대 글자 수
  placeholder?: string;
  unit?: string; // 단위
  value: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  type = 'text',
  minLen,
  maxLen,
  placeholder,
  unit,
  value,
}) => {
  const { register, errors } = useFormContext();
  const { dupId, dupName } = useDupStore();
  console.log(name, dupName);

  return (
    <>
      <label htmlFor={name} className="flex flex-col justify-start w-full">
        <div className="flex justify-between items-end">
          <span className="font-medium">{name}</span>
          <span className="text-sm text-red-500">
            {errors[value] ? (
              (errors[value]?.message as string)
            ) : (
              <InputError name={value} dupId={dupId} dupName={dupName} />
            )}
          </span>
        </div>

        <div className="flex items-center">
          <input
            id={value}
            placeholder={placeholder}
            type={type}
            {...register(value, {
              required: `필수입력 항목입니다.`,
              pattern: {
                value: new RegExp(
                  name === '이메일' ? '' : '^[가-힣A-Za-z0-9]*$',
                ),
                message: '띄어쓰기 또는 특수문자를 사용할 수 없습니다.',
              },
              ...(minLen && {
                minLength: {
                  value: minLen,
                  message: `${name}는 ${minLen}글자 이상이어야 합니다.`,
                },
              }),
              ...(maxLen && {
                maxLength: {
                  value: maxLen,
                  message: `${name}는 ${maxLen}글자 이하이어야 합니다.`,
                },
              }),
            })}
            // Input 디자인 className
            className={`w-full mt-2 h-12 bg-gray-50 border rounded-md outline-none px-3 font-medium border-gray-200 placeholder:text-sm`}
          />
          {/* 단위 ex) ~~~ cm kcal 등등 */}
          {unit && <p className="ml-4">{unit}</p>}
        </div>
      </label>
    </>
  );
};

export default FormInput;
