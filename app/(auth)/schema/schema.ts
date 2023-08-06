import * as yup from "yup";

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Please provide a functional email"),
});

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Please provide a functional email"),
  password: yup
    .string()
    .required("Please provide a password")
    .min(8, "Password must be at least 8 characters"),
});

export const SignupSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("Please enter your fullname")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Please provide a functional email"),
  password: yup
    .string()
    .required("Please provide a password")
    .min(8, "Password must be at least 8 characters"),
  referralCode: yup.number().integer(),
});
