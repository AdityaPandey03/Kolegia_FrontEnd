import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import { addUserDetails } from "../redux/actions/authActions";
import {  useNavigate,useLocation} from "react-router-dom"


const SignUpForm = () => {
    const addUserResponse = useSelector((state) => state.auth.addUserResponse);
    const location=useLocation();
   var Email;
   var Name;
   var Profile_picture;
    const errorMessage=useSelector((state)=>state.auth.errorMessage)
    
    var signUpErrorMessage;
    
    
 
    const navigate=useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [roll_number,setRollNo]=useState('')
    const [hostel,setHostel]=useState('')
    const [room_number,setRoomNo]=useState('')
    const [phone,setPhone]=useState('')
    const [profile_Picture,setProfilePicture]=useState('')
    const [password,setPassword]=useState('')
    const [confirm_password,setConfirm_Password]=useState('')
    const [terms_accepted,setTerms_accepted]=useState(false)
    const [year,setYear]=useState('')
    const [batch,setBatch]=useState('')

    if(location.state !=null){
    if(location.state.Email){
        Email=location.state.Email
    }
    if(location.state.name && location.state.profile_Picture){
        Name=location.state.name;
       Profile_picture=location.state.profile_Picture;
    }
         
    }

    const dispatch=useDispatch();
    
//signUp verified here
    if(addUserResponse.data){
        if(addUserResponse.data.user_token){
        localStorage.setItem("jwt",addUserResponse.data.user_token);
        navigate('/dashboard');
    }
}
else {
    signUpErrorMessage=errorMessage

  }



    const handleSubmit=()=>{
        // const formData= new FormData();
       
        // formData.append('name',name)
        // formData.append('email',email)
        // formData.append('roll_Number',roll_Number)
        // formData.append('hostel',hostel)
        // formData.append('room_Number',room_Number)
        // formData.append('phone',phone)
        // formData.append('password',password)
        // formData.append('confirm_password',confirm_password)
        // formData.append('terms_accepted',terms_accepted)
        

        // formData.append('profile_Picture',profile_Picture)

      
        dispatch(addUserDetails(name,email,roll_number,hostel,phone,password,confirm_password,terms_accepted,room_number,year,batch));
      
      }



    return ( 
        <div style={{display:'flex',flexDirection:'column',width:'500px',gap:'10px'}} className="signUpForm">
            <h1>Enter Your details</h1>
             <label   htmlFor="input">Name</label>
            <input defaultValue={Name} onChange={e=>setName(e.target.value)}  type="text" />
            <label  htmlFor="input">Email</label>
            <input defaultValue={Email} onChange={e=>setEmail(e.target.value)} type="text" />
            <label  htmlFor="input">Roll No</label>
            <input onChange={e=>setRollNo(e.target.value)} type="text" />
            <label  htmlFor="input">Hostel</label>
            <input onChange={e=>setHostel(e.target.value)} type="text" />
            <label  htmlFor="input">Room no</label>
            <input onChange={e=>setRoomNo(e.target.value)} type="text" />
            <label  htmlFor="input">Phone no</label>
            <input onChange={e=>setPhone(e.target.value)} type="number" />
            <label  htmlFor="input">Profile Picture</label>
            <input defaultValue={Profile_picture} onChange={e=>setProfilePicture(e.target.value)} type="file" />
            <label  htmlFor="input">Terms and condition</label>
            <input type="check" />
            <label  htmlFor="input">Password</label>
            <input onChange={e=>setPassword(e.target.value)} type="password" />
            <label  htmlFor="input">Confirm Password</label>
            <input onChange={e=>setConfirm_Password(e.target.value)} type="password" />
            <label  htmlFor="input">year</label>
            <input onChange={e=>setYear(e.target.value)} type="string" />
            <label  htmlFor="input">Batch</label>
            <input onChange={e=>setBatch(e.target.value)} type="string" />
            <label  htmlFor="input">Terms and condition</label>
            <input type="checkbox"
            onChange={(e)=>setTerms_accepted(e.target.checked)}
            defaultChecked={terms_accepted}
            />

            <button onClick={handleSubmit}>Submit</button>
            <p style={{color:'black'}}>{signUpErrorMessage}</p>
        </div>
     );
}
 
export default SignUpForm;