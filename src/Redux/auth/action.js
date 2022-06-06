export const authaction={
    LOGIN_REQUEST:"LOGIN_REQUEST",
    LOGIN_SUCCESS :"LOGIN_SUCCESS ",
    LOGIN_ERROR:"LOGIN_ERROR",
}

import axios from "axios";
export const postLogin = async ({ value, dispatch}) => {

   dispatch({
     type: authaction.LOGIN_REQUEST,
   });
   return axios({
     url: "https://reqres.in/api/login",
     method: "post",
     data: {
      
        email:value.email,
       password:value.password,
       
     },
   })
     .then((res) => {
        console.log(res.data);
       dispatch({ type: authaction.LOGIN_SUCCESS,payload:res.data });
     })
     .catch((err) => {
       console.log(err);
       dispatch({ type: LOGIN_ERROR });
     });
 };