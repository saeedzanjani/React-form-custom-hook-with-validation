import React, { useCallback, useState } from "react";
import { SchemaType } from "../models";

const useForm = (validate?: Function, schema?: SchemaType, submitCallback?: any ) => {
  const [values, setValues] = useState<any>({});
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
