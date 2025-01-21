import { useFormik } from "formik";
import React from "react";

function FormikComp(props) {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: (data) => {
            alert(JSON.stringify(data))
        }
    })
    return <>
        <form onSubmit={formik.handleSubmit}>
            <table>
                <tr><td>Enter email</td><td><input type="email" placeholder="Enter email" name="email" onChange={formik.handleChange} /></td></tr>
                <tr><td><input type="submit" value="Send" /></td></tr>
            </table>
        </form>
    </>
}

export default FormikComp;