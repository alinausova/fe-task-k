import React from "react";
import {Typography} from "@mui/material";
import * as Yup from "yup";
import {useFormik} from "formik";

// Define the validation schema
const validationSchema = Yup.object({
            firstName: Yup.string()
                .default("" as string),
        })

// Define the validation schema type
type ValidationSchema = Yup.InferType<typeof validationSchema>

// Define the form component
export const SignUpForm: React.FC = () => {
    // @ts-ignore unused variable
    const formik = useFormik<ValidationSchema>({
        initialValues: {
            ...validationSchema.getDefault()
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return <Typography>
        The sign up form should be here
    </Typography>
}