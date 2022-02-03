import { useState } from "react";
import { useDispatch } from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import { addUserDetails } from "../redux/actions/authActions";

const SignUpForm = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [roll_Number,setRollNo]=useState('')
    const [hostel,setHostel]=useState('')
    const [room_Number,setRoomNo]=useState('')
    const [phone,setPhone]=useState('')
    const [profile_Picture,setProfilePicture]=useState('')

    const dispatch=useDispatch();

    const handleSubmit=()=>{
        const formData= new FormData();
       
        formData.append('name',name)
        formData.append('email',email)
        formData.append('roll_Number',roll_Number)
        formData.append('hostel',hostel)
        formData.append('room_Number',room_Number)
        formData.append('phone',phone)
        formData.append('profile_Picture',profile_Picture)

      
        dispatch(addUserDetails(formData));
      
      }



    return ( 
        <div className="signUpForm">
            <h1>Enter Your details</h1>
             <label  htmlFor="input">Name</label>
            <input onChange={e=>setName(e.target.value)} type="text" />
            <label  htmlFor="input">Email</label>
            <input onChange={e=>setEmail(e.target.value)} type="text" />
            <label  htmlFor="input">Roll No</label>
            <input onChange={e=>setRollNo(e.target.value)} type="text" />
            <label  htmlFor="input">Hostel</label>
            <input onChange={e=>setHostel(e.target.value)} type="text" />
            <label  htmlFor="input">Room no</label>
            <input onChange={e=>setRoomNo(e.target.value)} type="text" />
            <label  htmlFor="input">Phone no</label>
            <input onChange={e=>setPhone(e.target.value)} type="number" />
            <label  htmlFor="input">Profile Picture</label>
            <input onChange={e=>setProfilePicture(e.target.value)} type="file" />
            <label  htmlFor="input">Terms and condition</label>
            <input type="check" />

            <button onClick={handleSubmit}>Submit</button>
        </div>
     );
}
 
export default SignUpForm;