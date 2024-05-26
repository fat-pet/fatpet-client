import React from 'react';
import { useFormContext } from '../contexts/FormContext';
import { josa } from '@toss/hangul';

interface FormInputProps {
  name?: string; // Input 위에 이름
  type?: 'text' | 'password' | 'email' | 'number';
  minLen?: number; // 최소 글자 수
  maxLen?: number; // 최대 글자 수
  placeholder?: string;
  unit?: string; // 단위
  value: string;
  className?: string;
}

const FormInputEmail: React.FC<FormInputProps> = ({
  name,
  type = 'text',
  minLen,
  maxLen,
  placeholder,
  unit,
  value,
  className,
}) => {
  const { register, errors } = useFormContext();

  return (
    <>
      <label htmlFor={value} className="flex flex-col justify-start w-full">
        <div className="flex justify-between items-end font-medium">
          <span>{name}</span>
          <span className="text-sm text-red-500">
            {errors[value]?.message as string}
          </span>
        </div>

        <div className="flex items-center">
          <input
            spellCheck={false}
            id={value}
            placeholder={placeholder}
            type={type}
            {...register(value, {
              required: `필수 입력 항목입니다.`,
              pattern: {
                value: new RegExp(''),
                message: '띄어쓰기는 사용할 수 없습니다.',
              },
              ...(minLen && {
                minLength: {
                  value: minLen,
                  message: `${josa(name as string, '은/는')} ${minLen}글자 이상이어야 합니다.`,
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
            className={`w-full mt-1 py-2.5 bg-gray-50 border outline-none px-3 font-medium border-gray-200 drop-shadow-sm ${className}`}
          />
          {/* 단위 ex) ~~~ cm kcal 등등 */}
          {unit && <p className="ml-8">{unit}</p>}
        </div>
      </label>
    </>
  );
};

export default FormInputEmail;
