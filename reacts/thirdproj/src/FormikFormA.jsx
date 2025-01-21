import { useFormik } from "formik";

const FormikFormA = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '', email: '', mobile: ''
        },
        onSubmit: (data) => {
            alert(JSON.stringify(data))
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
    </>
}

export default FormikFormA;