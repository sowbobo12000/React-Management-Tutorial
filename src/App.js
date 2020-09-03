import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1' ,
  'name' :'홍길동',
  'birthday' : '122020',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2' ,
  'name' :'나미',
  'birthday' : '120',
  'gender' : '남자',
  'job' : '박사'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3' ,
  'name' :'루피',
  'birthday' : '1343420',
  'gender' : '여자',
  'job' : '대학원'
}]

class App extends Component{
  render() {
      return ( 
        <div>
          {
            customers.map(c => {
              return(
                <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
              )
            })
          }
        </div>
      
  );
  }
}

export default App;
