import { useState, useEffect } from "react";

export const useForm = (initialValue) => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleReset = () => {
    setFormState(initialValue);
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return {
    formState,
    ...formState,
    handleChange,
    handleReset,
  };
};

// los componentes pueden:

// Leer los valores actuales

// Cambiar los valores al escribir

// Tener acceso a cada campo directamente (username, password, etc.)
