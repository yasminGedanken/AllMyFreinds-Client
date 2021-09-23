import './App.css';
import React ,{Component} from 'react';
import SearchBox from './components/SearchBox';
import Navbar from "./components/Navbar";
//import {Users}  from './Users';
import Scroll from './components/Scroll';
import UsersList from './components/UsersList';
import Axios from 'axios';



class App extends Component{

  constructor(){
    super()
    this.state={
      users: [],
      searchfield:""
    }
  }

  componentDidMount(){
    this.getUser();
  }

getUser =()=>{
  Axios.get("http://localhost:3001/read")
  .then((res)=>{
    const data = res.data;
    this.setState({users:data});
  }).catch(()=>
  alert('Eror retriver data'));
}


 

  onSearchChenge = (event) =>{
    this.setState({searchfield: event.target.value})
  }
  

   
render(){
  const filter1 = this.state.users.filter(user =>{
    return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })
  if (this.state.users.length === 0){
    return <h1>Loading</h1>
  }else{

  return(
  
  <div className="tc">
    <h1 className='f1 '>HUMANZ</h1>
    <Navbar/>
    <SearchBox searchChenge={this.onSearchChenge}/>
    <Scroll>
    <UsersList users ={filter1}/>
    </Scroll>
  </div>
 
);}
}
}



export default App;