import { useState } from "react";

const useInputState = () => {
  const [input, setInput] = useState("");
  const handleChange = (evt) => {
    setInput(([evt.target.name] = evt.target.value));
  };
  const reset = () => {
    setInput("");
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    reset();
  };
  return [input, handleChange, handleSubmit];
};

export default useInputState;
