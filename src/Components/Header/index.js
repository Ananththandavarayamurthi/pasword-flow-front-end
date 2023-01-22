import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {
    const navigate = useNavigate();
    const [cookie, setCookie,removeCookie] = useCookies(['accessToken']);
    
    const handleLogout = async () => {
         const response= await axios.get(`${process.env.REACT_APP_BASE_URL}/signout`, {userCredentials: true});
      //  response?(removeCookie("accsessToken"),navigate("/login")):(navigate("/login"))
      if(response){
        props.data.setData(null)
        removeCookie('accessToken');
    navigate('/login')
    
        
    }
    navigate("/login") 
    }

    return (
        <div><Nav >
      <Nav.Item as="li">
        <Nav.Link ><h3>Register,login,signout,forgotPassword flow</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" >
        <Nav.Link  onClick={handleLogout}><button>log-out/log-in</button></Nav.Link>
      </Nav.Item>
    </Nav></div>
        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <h3 class="navbar-brand" ></h3>
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>

        //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //         <button >
        //             Login/Logout
        //         </button>
        //     </div>
        //     </nav>
    )
}

export default Header;