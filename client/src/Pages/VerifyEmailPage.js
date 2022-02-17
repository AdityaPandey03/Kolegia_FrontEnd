import {useState,useEffect} from 'react';
import { useDispatch ,useSelector} from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import {verifyEmail, verifyEmailForReset} from '../redux/actions/authActions'
import LoadingButton from '@mui/lab/LoadingButton';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const VerifyEmailPage = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const location=useLocation();
    const responseStatusCode= useSelector((state) => state.auth.resetStatusCode);
    
    const errorMessage=useSelector((state)=>state.auth.errorMessage)
    const [email,setEmail]=useState('');
    const [loading, setLoading] = useState(false);
    
   

    if(responseStatusCode===200){
        navigate('/otpPage',{
          state:{Email:email,verification:'FORGOT_PASSWORD'}
        });}
    
    var message3=errorMessage;
    useEffect(()=>{
        setLoading(false);
       },[message3]);
       
   
    const style={

box:{
    position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width:'400px',
        display:"flex",
        flexDirection:'column',
        alignItems:"center",
        gap:"2rem",
        padding:'10px',
        borderRadius:'8px',
background: '#F0BC5E',
boxshadow:  '5px 5px 10px #b5b5b5,-5px -5px 10px #ffffff',
             
},
cont:{
    backgroundColor:'#332A7C',
    width:'100vw',
    height:'100vh'
}
}
     const handleClick =()=>{
         setLoading(true);
     dispatch(verifyEmailForReset(email));
    }


    return ( 
        <div style={style.cont} className="otp-container">
            <div style={style.box} className="otp-box">
            <p style={{fontSize:'1.3rem'}}>
                An otp will be sent to your email address to verify you account 
            </p>
            <input onChange={(e)=>setEmail(e.target.value)} style={{width:'12rem',height:'2rem'}} type="email" placeholder="Email"/>
           
            <LoadingButton
                style={{width:'13rem',color:'white',background:'#332A7C',borderRadius:'10px',margin:'20px',height:'2.8rem'}}
                className='submit button'
        onClick={handleClick}
        endIcon={<ArrowForwardIosIcon/>}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
  Send Otp
      </LoadingButton>
            <p style={{color:'black'}}>{message3}</p>
            </div>
           
        </div>
     );
}
 
export default VerifyEmailPage;