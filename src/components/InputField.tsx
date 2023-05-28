import React, { useState } from "react";

const InputField = () => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value);
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
    </div>
  );
};

export default InputField;
