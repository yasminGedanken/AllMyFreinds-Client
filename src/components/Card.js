import React from 'react';

const Card = ({name, id, ipAdress,phone}) =>{
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

</div>
    );


    }
    export default Card;
