import { useState } from "react";
function App(){
const[username,setusername]=useState("");
const[password,setpassword]=useState("");
const handlelogin=(e)=>{
  e.defaultPrevent();
if(username==="admin" && password==="1234"){
  alert("login");
}
else{
  alert("no");
}
};
return(
  <div>
    <form onSubmit={handlelogin}>
<input type="text" placeholder="username" value={username} onChange={(e)=>setusername(e.target.value)}>
</input>
<input type="text" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}>
</input>
<button type="submit">Login</button>
    </form>
  </div>
);


}export default app;
