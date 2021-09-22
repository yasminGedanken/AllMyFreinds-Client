import './App.css';
import React ,{Component} from 'react';
import SearchBox from './components/SearchBox';
import Navbar from "./components/Navbar";
import {Users}  from './Users';
import Scroll from './components/Scroll';
import UsersList from './components/UsersList';

 


class App extends Component{

  constructor(){
    super()
    this.state={
      users: Users,
      searchfield:""
    }
  }

  componentDidMount(){
    fetch('SampleData')
    .then(response=> response.json())
    .then(users=> this.setState({users:users}));
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
