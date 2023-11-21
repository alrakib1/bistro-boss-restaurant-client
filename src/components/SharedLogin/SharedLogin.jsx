import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SharedLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = ()=>{
        googleLogin().then(result=>{
            console.log(result.user)
            // displayName
            // : 
            // "Abdullah Al Rakib"
            // email
            // : 
            // "abdullahalrakib30@gmail.com"
            const userInfo = {
                name: result.user?.displayName,
                email : result.user?.email
            }
axiosPublic.post('/users',userInfo).then(()=>{
    // console.log(res.data)
    navigate('/');
})
        }).catch((error) => {
            // // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // // ...
            console.log(error)
          })
    }

    return (
        <div className="mb-4">
            <div>
            <button onClick={handleGoogleLogin} className="btn">
 <FaGoogle></FaGoogle>
Google
</button>
            </div>
        </div>
    );
};

export default SharedLogin;