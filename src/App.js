import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  var names = ['Mohammad', 'yousop','Belal'];
  const products = [
    {name:'Photoshop',price:'$54.3'},
    {name:'Illustrator',price:'$94.3'},
    {name:'PDF Reader',price:'$4.3'}
  ]

  
  return (
    <div className='App'>
      <header className='App-header' >
      <p>React start in 21 august</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          names.map(name => <li>name: {name}</li>)
        }
      </ul>
      
      <ul>
        {
          products.map(product => <li>name: {product.name}</li>)
        }
      </ul>

        {
          products.map(product => <Product product = {product} ></Product>)
        }


      <Man name = {names[0]} title='Ideal person.' ></Man>
      <Man name = {names[1]}></Man>
      <Man name = {names[2]}></Man>
      </header> 
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={ () => setCount(count - 1) }>increase</button>
      <button onMouseMove={handleIncrease}>increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Product(props) {
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor: "DodgerBlue",
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price} = props.product;
  console.log(name,price)
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Man(props) {

  console.log(props);
  return (
  <div style={{border:'2px solid red', margin:'3px'}}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of the world.</h3>
  </div>
  )
}
export default App;
