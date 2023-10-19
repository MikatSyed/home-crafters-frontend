import * as yup from "yup";

export const authSchema = yup.object().shape({
    password: yup.string().min(6).max(32).required(),
    email: yup.string().email("Invalid email address").required("Email is required"),   
    })
