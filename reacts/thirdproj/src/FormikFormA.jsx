import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

const FormikFormA = (props) => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '', email: '', mobile: ''
        },
        onSubmit: (data) => {
            dispatch({type: 'INC', value: JSON.stringify(data)})
        }
    })
    return <>
        <form onSubmit={formik.handleSubmit}>
            <table style={{backgroundColor: 'black', color: 'yellow'}}>
                <thead>
                    <tr><th></th><th></th></tr>
                </thead>
                <tbody>
                    <tr><td>Name</td><td><input type="text" name="name" onChange={formik.handleChange} placeholder="Enter Name" /></td></tr>
                    <tr><td>Email</td><td><input type="text" name="email" onChange={formik.handleChange} placeholder="Enter Email" /></td></tr>
                    <tr><td>Mobile</td><td><input type="text" name="mobile" onChange={formik.handleChange} placeholder="Enter Mobile" /></td></tr>
                    <tr><td><input type="submit" value="Register" /></td><td><input type="reset" value="Cancel" /></td></tr>
                </tbody>
            </table>
        </form>
        <br />
        <h1>{counter.value}</h1>
    </>
}

export default FormikFormA;