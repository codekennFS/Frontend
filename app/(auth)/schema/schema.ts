import * as yup from "yup";

export const ForgotPasswordSchema = yup.object().shape({
    email: yup.string().email().required("Please provide a functional email"),
})

export const LoginSchema = yup.object().shape({
    email: yup.string().email().required("Please provide a functional email"),
    password: yup.string().required("Incorrect Password"),
})

export const SignupSchema = yup.object().shape({
    fullname: yup.string().required("Name cannot be blank"),
    email: yup.string().email().required("Please provide a functional email"),
    password: yup.string().required().min(4).max(20),
    referralCode: yup.number().integer()
})