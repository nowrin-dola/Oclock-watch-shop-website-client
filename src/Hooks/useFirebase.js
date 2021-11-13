import initializedAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut ,onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";




initializedAuthentication();


const useFirebase=()=>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const[admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider= new GoogleAuthProvider();

    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name}
                setUser(newUser);
  
                savedUser(email, name , 'POST');
                
            
  
                updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
                
  
  
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
    
                savedUser(user.email, user.displayName, 'PUT');
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const savedUser=(email, displayName , method)=>{
        const user = {email, displayName}
        fetch('https://fathomless-temple-68118.herokuapp.com/users',{
            method: method,
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
  
    }

    useEffect(()=>{
            fetch(`https://fathomless-temple-68118.herokuapp.com/users/${user.email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data.admin))
        },[user.email])

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                // .then(idToken=>
                //   {
                //      setToken(idToken)
                //   })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
  



    return{
        user,
        isLoading,
        authError,
        admin,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut

    }

}


export default useFirebase;