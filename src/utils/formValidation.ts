import { FormValue, SchemaType } from "../models";

export const handleFormError = async (values: FormValue, schema: SchemaType) => {
    const validate = await schema.isValid(values);
    if (validate) return false
    
    return await schema.validate(values, { abortEarly: false })
    .catch((err: any) => {
      return err.inner.reduce((acc: any, error: any) => {
          return {
            ...acc,
            [error.path]: error.message,
          }
      }, {})
    })
  }