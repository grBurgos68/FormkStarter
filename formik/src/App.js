import React from "react";
// TODO: import useFormik from formik library
import './index.css';
import {useFormik} from 'formik';
function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''

    },
    onSubmit: values =>{
      console.log('form:', values);
      alert("Login Successful");


    },
    validate: values => {
      let errors = {};
      if(!values.emailField) errors.emailError = 'Field required';
      if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(values.emailField)) errors.emailInvalidError = 'Username should be an email';
      if(!values.pswField) errors.pswError = 'Field required';
    

      return errors;
    }
});
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>username</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div>: null}
        {formik.errors.emailInvalidError ? <div style={{color:'red'}}>{formik.errors.emailInvalidError}</div>: null}
        
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswError ? <div style={{color:'red'}}>{formik.errors.pswError}</div>: null}
        <button name="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
