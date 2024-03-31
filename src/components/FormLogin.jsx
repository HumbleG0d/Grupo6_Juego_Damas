import Form from "./Form/Form"
import Campo from "./Campo/Campo"
import Button from "./Button/Button"
import '../styles/normalize.css'
import '../styles/form.css'
import { useForm } from 'react-hook-form'
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

export default function FormLogin() {

  const { register, handleSubmit , formState:{errors} } = useForm()
  
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

    return (
      <div className="form-container">
      <p className="title">Login</p>
      <Form onSubmit={onSubmit}>
        <div className="input-group">
          <Campo
            classNameLabel="form_label"
            classNameInput="form_input"
            htmlFor="username"
            name="Username"
              type="text"
              register={register}
            />
            {errors.username && <span className="form_error">{errors.username.message}</span>}

        </div>
        <div className="input-group">
          <Campo
            classNameLabel="form_label"
            classNameInput="form_input"
            htmlFor="password"
            name="Password"
              type="password"
              register={register}
            />
            {errors.password && <span className="form_error">{errors.password.message}</span>}  

          <div className="forgot">
            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
          </div>
        </div>
        <Button classNameButon="sign">Sign in</Button>
      </Form>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">Login with social accounts</p>
        <div className="line"></div>
      </div>
      <div className="social-icons">
            <Button classNameButon="icon">
              <FcGoogle />
      </Button>
            <Button classNameButon="icon">
              <AiFillGithub />
            </Button>
          </div>
      <p className="signup">{`Don't have an account?`}
        <a rel="noopener noreferrer" href="#" className="">Sign up</a>
      </p>
    </div>
    );
}