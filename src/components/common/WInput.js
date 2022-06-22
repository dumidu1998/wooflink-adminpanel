import React from 'react'
import styles from './Styles.module.css'
import { useField } from "formik";
import TextField from '@mui/material/TextField'

function WInput(props) {
    const [field, meta] = useField(props.name)

    return (
        <>
            <TextField
                {...field}
                fullWidth={props.fullWidth ? true : false}
                label={props.label}
                type={props.type ?? 'text'}
                placeholder={props.placeholder}
                defaultValue={field.value}
                disabled={props.disabled}
                id={props.id || props.name}

            />

            {/* <input
                id={props.id || props.name}
                className={`${styles.formText} ${styles.textBox} ${props.className}`}
                value={field.value}
                type={props.type ?? "text"}
                placeholder={props.placeholder}
                disabled={props.disabled}
            /> */}
            {(meta.touched && meta.error) && <div className={styles.error}>{meta.error}</div>}
        </>
    )

}

export default WInput