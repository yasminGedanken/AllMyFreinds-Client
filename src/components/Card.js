import React from 'react';
import Axios from 'axios';

const Card = ({userkey,name, id, ipAdress,phone}) =>{

   

    const deleteFromDatabase =()=>{
        Axios.delete(`http://localhost:3001/delete/${userkey}`)
        window.location.reload(false)
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

<button className ="f6 link dim br3 ph3 pv2 mb3 dib black bg-red" onClick={deleteFromDatabase}>Delete</button>
</div>
    );


    }
    export default Card;
