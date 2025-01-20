import { useForm } from "react-hook-form";
import ChdCompFrm from "./ChdCompFrm";
import { useDispatch, useSelector } from "react-redux";

export default function FormCompA(props) {
    const {register, handleSubmit, formState} = useForm();
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    return <>
        <div className="alert alert-success">
            Value in store: <h1>{JSON.stringify(counter)}</h1>
        </div>
        <form onSubmit={handleSubmit((data) => {
            //alert(JSON.stringify(data));
            dispatch({type: 'INC', myvalue: JSON.stringify(data)});
        })}>
            <table className="table table-striped">
                <thead>
                    <tr><th></th><th></th></tr>
                </thead>
                <tbody>
                    <tr><td>Name</td><td><input type="text" placeholder="Enter name" {...register("name")} name="name" /></td></tr>
                    <tr><td>Email</td><td><input type="text" placeholder="Enter email" {...register("email")} name="email" /></td></tr>
                    <tr><td>Mobile</td><td><input type="text" placeholder="Enter mobile" {...register("mobile")} name="mobile" /></td></tr>
                    <tr><td><input type="submit" value="Register" /></td><td><input type="Reset" value="Cancel" /></td></tr>
                </tbody>
            </table>
        </form>
        <br />
        <div className="jumbotron">
            <ChdCompFrm />
        </div>
    </>
}