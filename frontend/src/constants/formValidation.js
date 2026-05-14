import * as Yup from "yup";

export const PASSWORD_VALIDATION = Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-zA-Z]/, 'Password must contain at least one alphabet character')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&#]/, 'Password must contain at least one special character (@$!%*?&#)')

export const confirmPasswordValidation = (rootField) => {
    return Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref(rootField), null], 'Passwords must match')
}

export const EMAIL_VALIDATION = Yup.string()
    .required('Email is required')
    .transform((value) => {
        if (!value) return value;

        const [localPart, domain] = value.split('@');
        if (!domain) return value;

        const cleanLocalPart = localPart.split('+')[0];
        return `${cleanLocalPart}@${domain}`;
    })
    .email('Invalid email format')