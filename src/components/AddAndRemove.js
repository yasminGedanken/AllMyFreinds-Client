import React , {useState} from 'react';
import Axios from 'axios';

function AddAndRemove(){
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [phone, setPhone] = useState('');
    const [ipAdress, setApi] = useState('');




const addToDatabase =()=>{
Axios.post("http://localhost:3001/insert", {
    name: name, 
    id :id,
    ipAdress:ipAdress,
    phone:phone,
});
};


return(
    <>
     <nav style={{display: 'flex', justifyContent: 'flex-mid'}}>
    <hr/>
    <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
    <input type="text" placeholder="ID" onChange={e => setID(e.target.value)} />
    <input type="text" placeholder="IpAdress" onChange={e => setApi(e.target.value)} />
    <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
   
    <button onClick={addToDatabase}>ADD</button>
    </nav>
    </>
    )
}


export default AddAndRemove;