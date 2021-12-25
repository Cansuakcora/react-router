import {Link} from 'react-router-dom';
import {useEffect , useState} from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]); 
    
    useEffect(() => {
         axios('https://jsonplaceholder.typicode.com/users')        
         .then(res => setUsers(res.data)
         );
    }, [])
    return (
        <div>
            <ul>
                {users.map((user,key) => (
                    <li key={key}>
                       <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
             
           </ul>
        </div>
    )
}

export default Users
