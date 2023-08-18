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

const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const SignupSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, "Name must be at least 2 characters long")
    .typeError("Please provide a valid name")
    .required("Your first name is required"),

  lastname: yup
    .string()
    .min(2, "Name must be at least 2 characters long")
    .typeError("Please provide a valid name")
    .required("Your last name is required"),

  // avatar: yup
  //   .string()
  //   .typeError("Invalid data received for display image")
  //   .nullable(false)
  //   .required("Avatar is required"),

  password: yup
    .string()
    .required("Password is required")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one symbol"
    )
    .min(8, "Password must be at least 8 characters long"),

  // phone: yup
  //   .number()
  //   .typeError("Invalid Phone number")
  //   .nullable(false)
  //   .required("User Phone number is required")
  //   .test(
  //     "length",
  //     "Invalid Phone number",
  //     (value) => value.toString().length === 10
  //   ),

  // username: yup
  //   .string()
  //   .required("Username is required")
  //   .nullable(false)
  //   .test(
  //     "length",
  //     "Username cannot be more than 30  Characters",
  //     (value) => value.toString().length <= 30
  //   ),

  email: yup
    .string()
    .matches(emailValidator, "The email provided is not valid")
    .required("Email is required"),

  referrerId: yup.string().nullable(),
});
