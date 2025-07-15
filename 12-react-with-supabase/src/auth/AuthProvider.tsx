import supabase from "@/supabase/supabase";
import { createContext, useState } from "react";




interface User {
  id:string;
  email:string;
}

interface AuthContextType {

}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({children}:{children:React.ReactNode}) {
  const [user, setUser] = useState<User | null>(null);

  supabase.auth.getUser().then(({data:{user}})=>{
    if(user){
      setUser({id:user.id,email:user.email!})
    }
  })


  return (
    <AuthContext>
      {children}
    </AuthContext>
  )
}

















