import React from 'react';
import Card from './Card';


const UsersList = ({users})=>
{
  console.log(users)
return(
  
    <div>{
     users.map((user, i) => {
   return(
    <Card 
    key={i}
    name={users[i].name} 
    id={users[i].id} 
    ipAdress={users[i].ipAdress}
    phone={users[i].phone}>
            
    </Card>
   );
  }  )
    }
</div>
);
}


export default UsersList;