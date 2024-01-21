import React from 'react';

export type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={id}>{label}</label>
      <input
        className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500'
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </div>
  );
};
