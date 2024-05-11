import { useFormContext } from '../contexts/FormContext';
import InputError from './InputError';
import { useDupStore } from '@/stores/useStore';
import { josa } from '@toss/hangul';
import useDebouncing from '@/hooks/useDebouncing';
import { getDup } from '@/api/axios';

interface FormInputProps {
  name?: string; // Input 위에 이름
  type?: 'text';
  minLen?: number; // 최소 글자 수
  maxLen?: number; // 최대 글자 수
  placeholder?: string;
  unit?: string; // 단위
  value: string;
  className?: string;
}

const FormInputDup: React.FC<FormInputProps> = ({
  name,
  type = 'text',
  placeholder,
  unit,
  value,
  className,
}) => {
  const { register, errors, watch } = useFormContext();
  const { dupId, dupName, setId, setName } = useDupStore();
  const id = watch('id');
  const nickName = watch('nickName');
  const handleIdDup = () => {
    if (id) {
      if (id.length < 4 || id.length > 12) {
        setId('error');
      } else {
        getDup(id, '').then((res) => {
          res.data.body === false ? setId(true) : setId(false);
        });
      }
    }
  };
  const handleNickNameDup = () => {
    if (nickName) {
      if (nickName.length < 2 || nickName.length > 10) {
        setName('error');
      } else {
        getDup('', nickName).then((res) => {
          res.data.body === false ? setName(true) : setName(false);
        });
      }
    }
  };

  useDebouncing({
    callback: handleIdDup,
    delay: 1000,
    dependency: id,
    setState: setId,
  });

  useDebouncing({
    callback: handleNickNameDup,
    delay: 1000,
    dependency: nickName,
    setState: setName,
  });
  return (
    <>
      <label htmlFor={value} className="flex flex-col justify-start w-full">
        <div className="flex justify-between items-end font-medium">
          <span>{name}</span>
          <span className="text-sm text-red-500">
            {errors[value] ? (
              (errors[value]?.message as string)
            ) : (
              <InputError
                name={value}
                dupId={dupId as boolean}
                dupName={dupName as boolean}
              />
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
                value: new RegExp('^[가-힣A-Za-z0-9]*$'),
                message: '띄어쓰기 또는 특수문자를 사용할 수 없습니다.',
              },
            })}
            className={`w-full mt-2 h-12 bg-gray-50 border outline-none px-3 font-medium border-gray-200 drop-shadow-sm ${className}`}
          />
          {unit && <p className="w-16 flex justify-center">{unit}</p>}
        </div>
      </label>
    </>
  );
};

export default FormInputDup;
