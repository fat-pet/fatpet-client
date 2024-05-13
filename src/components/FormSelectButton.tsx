import React, { ReactNode } from 'react';

interface Props {
  icon?: ReactNode;
  state?: boolean;
  label: string;
  handleClick: () => void;
  error?: string;
  errormessage?: string;
}

const FormSelectButton: React.FC<Props> = ({
  icon,
  label,
  state,
  handleClick,
}) => {
  return (
    <button
      type="button"
      className={`border-2 rounded-lg w-28 h-10 mr-5 flex items-center justify-center hover:bg-gray-300 ${state ? 'bg-gray-300' : ''}`}
      onClick={handleClick}
    >
      {icon} {label}
    </button>
  );
};

export default FormSelectButton;
