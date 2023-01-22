import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Login = (props) => {
    const [userCred, setUserCred] = useState({email: '', password: ''});
    // const [loginerror,setLoginerror]=useState(true);
    // const[userdeteils,setUserdetails]=useState(null)
    const navigate = useNavigate();
    const handleCred = value => {
        return setUserCred(cred => {
            return {...cred, ...value}
        })
    }


    const handleLogin = async (event) => {
        try{
            event.preventDefault();
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/signin`, userCred, {withCredentials: true})
            .then((res) =>  props.data.setData(res.data.existingUser))
            .then(
                   (navigate('/home'))
                )
            // .then((res) => props.data.setData(res));
            // 
            console.log(response)
        }catch(error){
            console.log('Error: ', error);
        }
    }

    return (
        <div>
            <h3>User Login</h3>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email" value={userCred.email} placeholder="Enter email" onChange={(e) => handleCred({email: e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" value={userCred.password} placeholder="Password" onChange={(e) => handleCred({password: e.target.value})} />
                </div>
                
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div>
                <a href="/forgotPassword">Forgot password?</a>
                <br/>
                <br/>
                <a href="/register">Register your accout?</a>
            </div>
        </div>
    )
}

export default Login;