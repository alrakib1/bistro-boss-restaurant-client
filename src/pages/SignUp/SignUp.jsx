import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SharedLogin from "../../components/SharedLogin/SharedLogin";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(() => {
        // const loggedUser = result.user;
        // console.log(loggedUser);
        updateUser(data.name, data.photURL)
          .then(() => {
            // create user entry in the database

            const userInfo = {
              name: data.name,
              email: data.email,
            };

            axiosPublic.post("/users", userInfo).then((res) => {
              // console.log(res.data)
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Signup Successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
                // if user is not updating properly then use log out instead of navigate
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 pt-1">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photURL && (
                  <span className="text-red-500 pt-1">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 pt-1">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register(
                    "password",
                    {
                      pattern:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                    },
                    { required: true, minLength: 6, maxLength: 20 }
                  )}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 pt-1">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 pt-1">
                    Password must have at least one uppercase letter, one
                    lowercase letter, one number and one special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Signup"
                />
              </div>
            </form>
            <p className="text-center">
            <div className="divider w-1/2 mx-auto pb-2">or Signup with</div>
              <SharedLogin></SharedLogin>
            </p>
            <p className="text-center pb-4">
              {" "}
              Already Have an account ?
              <Link className="text-orange-600 font-semibold" to="/login">
                {" "}
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
