import * as yup from "yup";

export const adminSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(32).required(),
    contactNo: yup.string().min(10).required("Contact No is required"),
    address: yup.string().required('Address is required'),
    avatar: yup.array()
    .min(1, 'Please select at least one image') // Ensure at least one image is selected
    .max(3, 'You can upload up to 3 images'),
    
})
export const adminUpdateSchema = yup.object().shape({
    name: yup.string().required("Name is required").optional(),
    email: yup.string().email().required("Email is required").optional(),
    contactNo: yup.string().min(10).required("Contact No is required").optional(),
    address: yup.string().required('Address is required').optional(),
    
})
