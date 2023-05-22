import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import { useRef, useState } from "react";
import Input from '@mui/material/Input';
import { TextField } from "@mui/material";
import { Avatar, Popover} from "@mui/material";

export const Apple = () => {
     const [ name,setName]= useState("nidhi");
     const [ email,setEmail]= useState("nidhi@test.com");
     const [ open,setOpen]= useState(false);
     const [ anchorEl, setAnchorEl]= useState(null);

     const Navigate = useNavigate();

     const onHomePageButtonClick = () => {
      //Navigate("/");

     console.log("button clicked");
     console.log("Name: ",name);
     console.log("Email: ",email);
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

          <TextField variant="outlined" type="text" value={name} label="Name" placeholder="Name" onChange={(e) => {setName(e.target.value);}}/>
          <TextField variant="outlined"type="email" value={email} label="Email" placeholder="email" onChange={(e) => {setName(e.target.value);}}/> 

     {/*<button onClick={onHomePageButtonClick}>Navigate to homepage</button>*/}
     <Button variant="contained" onClick={onHomePageButtonClick }className="">SUBMIT</Button>
     </div>

     
<Popover 
open={open}

  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}

     anchorEl= {anchorEl}
     onClose={handleClose}
>
  <div style={{
     padding: 5,
  }}>
  <Button variant="contained" onClick={onHomePageButtonClick }className="">Logout</Button>
  </div>
</Popover>
     </div>
     
     );
     };




