import {useParams , Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function User() {
  const [user , setUser] = useState({});  
  const {id} = useParams();  
  //users componentindeki linklere tıklanınca aşağıdaki bilginin cekilmesini sağlar.child route gibi

  useEffect(() => {
     axios(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((res) => setUser(res.data));
  }, [id]);

    return (
        <div>
         <h5>User Detail</h5>
         {/* js nesnesini stringe cevirir:JSON.stringify */}
         <code>{JSON.stringify(user)}</code> 
         
         <br/> <br/>
         {/* id string olarak alıyorduk integer a cevrildi */}
         <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
        </div>
    )
}

export default User;
