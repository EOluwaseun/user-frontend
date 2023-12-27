import React from 'react';

function CustomInput(props) {
  const { type, name, placeholder, className } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}

export default CustomInput;
