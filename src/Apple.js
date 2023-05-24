import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import Input from '@mui/material/Input';
import { TextField } from "@mui/material";
import { Avatar, Popover} from "@mui/material";
import {Formik} from "formik";
import  * as Yup from "yup";


export const Apple = () => {
     //const [ name,setName]= useState("nidhi");
    // const [ email,setEmail]= useState("nidhi@test.com");
     const [ open,setOpen]= useState(false);
     const [ anchorEl, setAnchorEl]= useState(null);
     const Navigate = useNavigate();

     useEffect(() => {
         // console.log("The new value of name: ",name);
         // return () => {
          //console.log("The old value of name: ",name);
          //};
     }, []);

     const validationSchema = Yup.object().shape({
          name: Yup.string().min(3,"Please enter name with atleats 3 characters"),
          email:Yup.string().email("Please enter valid email"),
     });

     const initialValues= {
          name:"",
          email:"",
     }

     const onFormSubmit = (values) => {
          console.log("on the form submitted",values);
     

     
     Navigate("/");
     };

     const handleClick = (event) => {
          console.log(123);
          setAnchorEl(event.currentTarget);
          setOpen(true);
     };
     const handleClose = () => {
          setAnchorEl(null);
          setOpen(false);
     };


     
     return(

     <div style={{padding: 5,}}> 
    {/* <div>Apple Page</div>*/}
    <div style={{
           display: "flex",
           justifyContent:"flex-end",
           cursor:"pointer",
               }}
               
      >
          <div onClick= {handleClick}
          style={{
               display:"flex",
               justifyContent:"flex-end",
               alignItems:"center",
               columnGap: 5,
          }}>
    <Avatar sx={{ bgcolor: "blue"}}>NP</Avatar>
    <span>Nidhi Pawar</span>
    </div>
    </div>

     <div style={{padding: 5,
          display: "flex",
          flexDirection:"column",
          rowGap:5}}>
     
     <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onFormSubmit}>

          {({ value, errors, touched, handleChange,handleBlur,handleSubmit }) => (
                       
           <form onSubmit={handleSubmit}>
               <div style={{
                    display:"flex",
                    flexDirection: "column"
               }}>
          <TextField variant="outlined" type="text" label="Name" id="name" placeholder="Name" 
          onChange={handleChange} onBlur={handleBlur}/>

          {touched.name && errors.name && <span style={{
                                                       padding: 5,
                                                       color:"red",
                                                       fontSize: 16 }}>{errors.name}</span> }
          </div>

          <div style={{
                    display:"flex",
                    flexDirection: "column"
               }}>

          <TextField variant="outlined"type="email" label="Email" id="email" placeholder="email"
           onChange={handleChange} onBlur={handleBlur}/> 

          {console.log("Email validation:",errors)}
          {touched.email && errors.email && <span style={{
                                                       padding: 5,
                                                       color:"red",
                                                       fontSize: 16 }}>{errors.email}</span> }    
          </div> 

          {/*<button onClick={onHomePageButtonClick}>Navigate to homepage</button>*/}
          <Button variant="contained" type="submit" className="">SUBMIT</Button>

          </form>
           )}
     
      
     </Formik>
     </div>

     
 {/*<Popover 
open={open}

  anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
  transformOrigin={{vertical: 'top', horizontal: 'left',}}

     anchorEl= {anchorEl}
     onClose={handleClose}
>
  <div style={{
     padding: 5,
  }}>
  <Button variant="contained" onClick={onHomePageButtonClick }className="">Logout</Button>
  </div>
</Popover>*/}

     </div>
     
     );
     };




