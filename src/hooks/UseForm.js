import { useEffect, useState } from "react";

export const UseForm = (defaultFormValues) => {
    const [formValues, setFormValues] = useState(defaultFormValues);

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

    useEffect(() => {
        setIsButtonDisabled(checkButtonDisabled(formValues));
    },[formValues])

    const clearForm = (data) => {
        setFormValues(data);
    }

    const checkButtonDisabled = (formValues) => {
        for(let x in formValues ){
            if(formValues[x]?.error){
                return true;
            }
        }
    }

    return {
        formValues,
        onFormChange,
        clearForm,
        isButtonDisabled,
        setFormValues,
    };
};