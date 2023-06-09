export const generateLoginFormValues = () => {
    return{
        email: {
            value: "",
            required: true,
            error: null,
            validateInput: (email) =>
            email.includes("@gmail.com") ? "" : "email is not valid"
        },
        password: {
            value: "",
            required: true,
            error: null,
            validateInput: (password) =>
            password.length > 6 ? "" : "password should have at 6 characters"
        },
    };
};