import React from 'react';
import './App.css';
import Card from './Card/Card';
import Sdata from './Card/Sdata';
import ReactDOM from 'react-dom';
//import Form from './Form';

function App(val) {
  return(
 
  <Card
  ///key={val.id}
  imgsrc={val.imgsrc}
  title={val.title}
  link={val.link}/>

  );
}

ReactDOM.render(
  <>
   <h1 className="heading_style">Seed Information</h1>
  
  {Sdata.map(App)}
  </>,
  document.getElementById('root')
);


export default App;