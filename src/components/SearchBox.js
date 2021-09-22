import React from 'react';

const SearchBox = ({ searchChenge}) =>{

return(
<div className="pa2">
    <input className="pa3 ba b--green bg-lightest-blue"
    type="search"
    placeholder="search user"
    onChange={searchChenge}></input>
</div>

);
}

export default SearchBox;