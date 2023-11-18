import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
const Login = () => {


    const captchaRef = useRef(null);

    const [disabled,setDisabled] = useState(true);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
  const handleLogin = (e) => {
    e.preventDefault();
    // const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({email,password})
  };

    const handleValidateCaptcha = ()=>{
        const user_captcha_value = captchaRef.current.value;
        // console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)==true) {
            alert('Captcha Matched');
            setDisabled(false);
        }
   
        else {
            alert('Captcha Does Not Match');
            setDisabled(true);
        }

    }  



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              < LoadCanvasTemplate />
              </label>
              <input
              ref={captchaRef}
                type="text"
                placeholder="type the captcha above"
                name="captcha"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className="btn mt-2 btn-outline btn-xs">Validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;