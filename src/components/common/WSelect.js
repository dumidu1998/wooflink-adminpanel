import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useField, ErrorMessage } from "formik";
import styles from './Styles.module.css'

function WSelect(props) {
    const [field, _meta, helpers] = useField(props.name)

    return (
        <div>
            <FormControl fullWidth={props.fullWidth ? true : false} {...field} >
                <InputLabel>{props.label}</InputLabel>
                <Select label='Role' defaultValue={props.defaultValue} onChange={(e) => helpers.setValue(e.target.value)}>
                    <MenuItem value='selectOne' style={{ display: "none" }}>Select One</MenuItem>
                    {props?.list?.map((item, index) => {
                        return <MenuItem key={index} value={item}>{item}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <div className={styles.error}>
                <ErrorMessage name={props.name} />
            </div>
        </div>
    )
}

export default WSelect