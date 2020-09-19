import PasswordRecovery from './screens/Auth/PasswordRecovery'
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';


const Routers = [
    // ======================= AUTH LAYOUT ====================== //
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/auth",
        require : false,
    },
    {
        path: "/Signup",
        name: "Signup",
        component: Signup,
        layout: "/auth",
        require : false,
    },
    {
        path: "/password-recovery",
        name: "Password Recovery",
        component: PasswordRecovery,
        layout: "/auth",
        require : false,
    },
  

    
]
export default Routers;