import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authentication } from '../components/firebase/config'

export const AuthContext = React.createContext();
export default function AuthProvider({children}) {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const unsubscibed = authentication.onAuthStateChanged((user)=>{
            console.log(user)
            if(user){
                const {displayName, email , uid, photoUR} = user
                setUser({displayName, email , uid, photoUR})
                setIsLoading(false)
                navigate('/')
            }
            else{
                navigate("/login")             
            }
        })
        
        //clean function
        return () => {
            unsubscibed()
        }
    },[navigate])
  return (
    <AuthContext.Provider value={user}>
        <div>
            {isLoading ? <Spin/> : children}
        </div>
    </AuthContext.Provider>
  )
}
