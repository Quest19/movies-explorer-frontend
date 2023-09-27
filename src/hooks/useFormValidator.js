import { useState, useCallback } from "react";
import validator from "validator";

export function useFormValidator() {
    const [formValue, setFormValue] = useState({});
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormValue({
            ...formValue,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: event.target.validationMessage,
        });

        setIsFormValid(event.target.closest("#form").checkValidity());

        if (name === "email") {
            const isEmail = validator.isEmail(value);
            if (!isEmail) {
                setErrors({
                    ...errors,
                    [name]:
                        event.target.validationMessage ||
                        "Введите ваш полный email адрес",
                });
                setIsFormValid(isEmail);
            }
        }
    };
    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsFormValid = false) => {
            setFormValue(newValues);
            setErrors(newErrors);
            setIsFormValid(newIsFormValid);
        },
        [setFormValue, setErrors, setIsFormValid]
    );

    return {
        formValue,
        errors,
        handleChange,
        isFormValid,
        resetForm,
        setIsFormValid,
    };
}
