import { checkdup } from '@/api/axios';
import { useFormContext } from '@/contexts/FormContext';
import { useDupStore } from '@/stores/useStore';
import React from 'react';
interface FormButtonProps {
    name?: string;
    dup?: string;
    type?: 'button' | 'submit';
}

const FormSmallButton: React.FC<FormButtonProps> = ({
    name,
    type = 'button',
    dup,
}) => {
    const { isSubmitting, watch } = useFormContext();
    const { setId, setName } = useDupStore();

    const handleDup = () => {
        const Id: string = watch('아이디');
        const Nickname: string = watch('닉네임');
        if (dup === '닉네임') {
            if (Nickname.length <= 12 && Nickname.length >= 4) {
                checkdup(' ', Nickname).then((data) => {
                    data.status === 200 ? setName(true) : setName(false);
                });
            } else {
                setName('error');
            }
        } else if (dup === '아이디') {
            if (Id.length <= 12 && Id.length >= 4) {
                checkdup(Id, ' ').then((data) => {
                    data.status === 200 ? setId(true) : setId(false);
                });
            } else {
                setId('error');
            }
        }
    };

    return (
        <div>
            <button
                type={type}
                className="w-20 h-10 bg-[#333333] text-white tracking-tighter text-sm mb-1"
                onClick={handleDup}
                disabled={isSubmitting}
            >
                {name}
            </button>
        </div>
    );
};

export default FormSmallButton;
