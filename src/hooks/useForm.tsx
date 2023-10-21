import React, { useCallback, useState } from "react";
import { SchemaType } from "../models";

// PropsTypes
type InitialStateType = {
  [key: string | symbol]: string;
}

const useForm = (initialState: InitialStateType, validate?: Function, schema?: SchemaType, submitCallback?: Function) => {
  const [values, setValues] = useState<any>(initialState);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist();
      const { name, value } = e.target;
      setValues((prev: any) => ({
        ...prev,
        [name]: value,
      }));
    }

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (validate) {
        const err = await validate(values, schema);
        if (!err) {
          alert("Form submited!.");
          console.log("done!", values);
        }
        setErrors(err);
        return
      } else if (submitCallback) {
        submitCallback()
        return
      }
    },
    [values, schema, validate, submitCallback]
  );

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
