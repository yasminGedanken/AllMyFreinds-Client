import React , {useState} from 'react';
import Axios from 'axios';

function AddUser(){
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [phone, setPhone] = useState('');
    const [ipAdress, setApi] = useState('');


const isValid=()=>{
    if(
     name===''||     
    ipAdress===''||
    phone==="") { 
        alert ("invalied input");
        return false
    }

    if( id.length!==9)
    { 
        alert ("id need to be 9 digits");
        return false
    }
    
    if (isNaN(id))
    { 
        alert ("ID is not a number!");
        return false
    }
return true;
}

const addToDatabase =()=>{
   if(!isValid()){
   }
   else{
Axios.post("http://localhost:3001/insert", {
    name: name, 
    id :id,
    ipAdress:ipAdress,
    phone:phone,
});
window.location.reload(false)
   }
};


return(
    <>
     <nav style={{display: 'flex', justifyContent: 'flex-mid'}}>
    <hr/>
    <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
    <input type="text" placeholder="ID" onChange={e => setID(e.target.value)} />
    <input type="text" pattern="[0-9]*" placeholder="IpAdress" onChange={e => setApi(e.target.value)} />
    <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
   
    <button onClick={addToDatabase}>ADD</button>
    </nav>
    </>
    )
}



export default AddUser;