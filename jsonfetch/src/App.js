import { useState, useEffect } from "react";

function App() {
const [users, setUsers] = useState([]);
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => setUsers(data));
}, []);
return (
<div style={{textAlign:"center"}}>
<h2>User List</h2>
{users.map(user => (
<div key={user.id}>
<p>{user.name} - {user.email}</p>
</div>
))}
</div>
);
}
export default App;