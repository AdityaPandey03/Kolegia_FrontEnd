import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import "../Components/LoginSignUp/SignUpForm.css";
import {editProfile,resetStatus} from "../redux/actions/authActions";
import {  useNavigate,useLocation} from "react-router-dom"



const Edit_Profile = () => {
    // const addUserResponse = useSelector((state) => state.auth.addUserResponse);
    const location=useLocation();
    const navigate=useNavigate();
    const profileData=location.state.Data;
    const dispatch=useDispatch();

   var Name,Hostel,Room_Number,Phone,Profile_Picture;

   if(profileData){
      
       Name=profileData.name;
      Room_Number=profileData.room_number;
       Hostel=profileData.hostel;
      
       Phone=profileData.phone;
       Profile_Picture=profileData.profile_Picture;
     
   }

   const  Status8=useSelector((state=>state.auth.editProfileResponse));
  const  data=useSelector((state=>state.auth.editProfileData));
  
    const errorMessage2=useSelector((state)=>state.auth.errorMessage)
     var NewToken;
    if(data){
       NewToken=data.user_token;
    }
    
    
    if(Status8===200){
      localStorage.setItem("jwt",NewToken);
        dispatch(resetStatus);
         navigate('/sidebar')
         
     }
 
  

   const [name,setName]=useState(Name)
    const [hostel,setHostel]=useState(Hostel)
    const [room_number,setRoomNo]=useState(Room_Number)
    const [phone,setPhone]=useState(Phone)
    const [profile_Picture,setProfilePicture]=useState('')
    

    

   

    
    




    const handleSubmit=(e)=>{
        e.preventDefault();
        const token = localStorage.getItem("jwt");
          const decoded = jwt_decode(token);
      
        
        const formData= new FormData();
        formData.append('name',name)
        formData.append('hostel',hostel)
        formData.append('room_number',room_number)
        formData.append('phone',phone)
        formData.append('profile_Picture',profile_Picture)
        

      
        dispatch(editProfile(formData));
      
      }



    return ( 
        <div className="signUpContainer">
        <div  className="signUpFormCont">
            <h1 style={{width:'100%',color:'#332A7C'}}>Edit Profile</h1>
           
            
            <input defaultValue={Name} onChange={e=>setName(e.target.value)} placeholder="Name"  type="text" />
            
            <input defaultValue={Phone} onChange={e=>setPhone(e.target.value)} type="number" placeholder="Mobile No" />

   
           
            <input defaultValue={Hostel} onChange={e=>setHostel(e.target.value)} type="text" placeholder="Hostel(BH-1)" />
            <input defaultValue={Room_Number} onChange={e=>setRoomNo(e.target.value)} type="text" placeholder="Room No" />
            <label  htmlFor="input">Profile Picture</label>
            <input style={{border:'none'}} onChange={e=>setProfilePicture(e.target.value)} type="file" />
         
          
            
            <button style={{width:'31rem',height:'3rem',fontSize:'1.4rem',background:"#F25767",color:'white',border:'none',borderRadius:'6px'}} onClick={handleSubmit}>Submit</button>
            <p style={{color:'black'}}>{errorMessage2}</p>
        </div>
        </div>
     );
}
 
export default Edit_Profile;