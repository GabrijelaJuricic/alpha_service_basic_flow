import * as yup from "yup";

export const emailFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Not a valid email")
    .required("Please enter your email"),
});
