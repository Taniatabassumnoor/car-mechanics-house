import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Shared/Login/Firebase/firebase.initialize";
initializeAuthentication();
const useFirebase = () => {
    const [users,setUsers] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result);
            setUsers(result.user);
        })

        .finally(()=>{
            setIsLoading(false)
        });
        
    }
    useEffect(()=>{
        onAuthStateChanged(auth,users=>{
            if(users){
                setUsers(users)
            }
            else{setUsers({})}
        });
        setIsLoading(false);
    },[])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{ })
        .finally(()=>{
            setIsLoading(false)
        });
} 
   
    return{
users,
signInUsingGoogle,
logOut,
isLoading
    }
}
export default useFirebase;