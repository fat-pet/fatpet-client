// import { checkdup } from '@/api/axios';
// import { useFormContext } from '@/contexts/FormContext';
// import { useDupStore } from '@/stores/useStore';
// import React from 'react';
// interface FormButtonProps {
//   name?: string;
//   dup?: string;
//   type?: 'button' | 'submit';
// }

// const FormSmallButton: React.FC<FormButtonProps> = ({
//   name,
//   type = 'button',
//   dup,
// }) => {
//   const { isSubmitting, watch } = useFormContext();
//   const { setId, setName } = useDupStore();

//   const handleDup = () => {
//     const Id: string = watch('아이디');
//     const Nickname: string = watch('닉네임');
//     if (dup === '닉네임') {
//       if (Nickname.length <= 12 && Nickname.length >= 4) {
//         checkdup(' ', Nickname).then((data) => {
//           data.status === 200 ? setName(true) : setName(false);
//         });
//       } else {
//         setName('error');
//       }
//     } else if (dup === '아이디') {
//       if (Id.length <= 12 && Id.length >= 4) {
//         checkdup(Id, ' ').then((data) => {
//           data.status === 200 ? setId(true) : setId(false);
//         });
//       } else {
//         setId('error');
//       }
//     }
//   };

//   return (
//     <button
//       type={type}
//       className="min-w-fit px-4 py-3 mb-0.5 bg-neutral-800 text-sm text-white font-semibold drop-shadow hover:opacity-70 transition-opacity"
//       onClick={handleDup}
//       disabled={isSubmitting}
//     >
//       {name}
//     </button>
//   );
// };

// export default FormSmallButton;
