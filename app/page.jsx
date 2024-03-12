"use client"
import Link from 'next/link'
import { useFormik } from 'formik';
import "./page.css"
function page() {
const {handleChange,handleBlur,handleSubmit,values}=useFormik({
    initialValues: {
        email: '',
        password: '',
      },
   onSubmit:(values)=>{
    console.log(values);
   }
})
  return (
    <div>
        <div className="container">
  <div className="screen">
    <div className="screen__content">
      <form className="login" onSubmit={handleSubmit}>
        <div className="login__field">
          <i className="login__icon fas fa-user" />
          <input
            type="email"
            className="login__input"
            placeholder="User name / Email"
            id='email'
            name='email'
            onChange={handleChange}
          />
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock" />
          <input
            type="password"
            id='password'
            name='password'
            className="login__input"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button className="button login__submit">
          <span className="button__text">Log In Now</span>
          <i className="button__icon fas fa-chevron-right" />
        </button>
      </form>
      <div className="social-login">
        <div className='mt-10'>
        <div>Not registered </div><Link href={"/signup"}>Sign up</Link></div>
      </div>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4" />
      <span className="screen__background__shape screen__background__shape3" />
      <span className="screen__background__shape screen__background__shape2" />
      <span className="screen__background__shape screen__background__shape1" />
    </div>
  </div>
</div>

    </div>
  )
}

export default page