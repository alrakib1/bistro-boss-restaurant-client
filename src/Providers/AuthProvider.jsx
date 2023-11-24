import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);


  const axiosPublic = useAxiosPublic();

  // create user with email and password...

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  update user profile with name and photo...

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // log in user with email and password

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   log out user

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // google login

  const googleLogin = () => {
    setLoading(true);
   return signInWithPopup(auth,provider);
  };

  //   get currently signed in user...

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   
      if(currentUser){
//  get token and store client
const userInfo = {email:currentUser.email}

        axiosPublic.post('/jwt',userInfo).then(res=>{
          // console.log(res.data)
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token);
            setLoading(false)
          }
        })

      }else{
        //  remove token 
        localStorage.removeItem('access-token');
        setLoading(false)
      }
      // console.log('current user', currentUser)
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUser,
    logIn,
    logOut,
    googleLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
