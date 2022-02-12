import axios from 'axios'
import {EDIT_PROFILE} from '../constants/AllConstants'


export const editProfile= ()=> async(dispatch)=>{

    try {
        const res=await axios.put(
           "http://localhost:3000/api/v1/"
        )
    } catch (error) {
        
    }

}