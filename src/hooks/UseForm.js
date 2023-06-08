import { useState } from "react";

export const UseForm = (defaultFormValues) => {
    const [formValues, setFormValues] = useState(defaultFormValues);

    const onFormChange = (event) => {
        const {name , value} = event.target;
        const {validateInput} = formValues[name]
        setFormValues((prevFormValues) => {
            return {
                ...prevFormValues,
                [name] : {
                    ...prevFormValues[name],
                    value,
                    error:validateInput ? validateInput(value):null,
                },
            };
        });
    };

    const clearForm = (data) => {
        setFormValues(data);
    }

    return {
        formValues,
        onFormChange,
        clearForm,
    };
}