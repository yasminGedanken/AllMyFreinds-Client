import React from 'react';
import Axios from 'axios';

const Card = ({name, id, ipAdress,phone}) =>{


    const deleteFromDatabase =(id)=>{
        Axios.delete(`http://localhost:3001/delete/${id}`, {
            name: name, 
            id :id,
            ipAdress:ipAdress,
            phone:phone,
        });
        };

    const faceId = id.slice(0,1);
    return(
<div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
<img alt='users' 
width="150" height="140"
src={`https://randomuser.me/api/portraits/men/${faceId}.jpg`}/>
<div>
    <h2>{name}</h2>
    <p>{id}</p>
    <p>{ipAdress}</p>
    <p>{phone}</p>
    
</div>
<button onClick={deleteFromDatabase}>Delete</button>
</div>
    );


    }
    export default Card;
