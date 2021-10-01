import React from 'react';
import './App.css';
import Card from './Card/Card';
import Sdata from './Card/Sdata';
//import Form from './Form';

function App() {
  return(
  <>
  <h1 className="heading_style">Seed Information</h1>
  <Card
  title={Sdata[0].title}
  imgsrc={Sdata[0].imgsrc}
 link={Sdata[0].link}
/> 
<Card
  title={Sdata[1].title}
  imgsrc={Sdata[1].imgsrc}
 link={Sdata[1].link}
/> 
<Card
  title={Sdata[2].title}
  imgsrc={Sdata[2].imgsrc}
 link={Sdata[2].link}
/> 
<Card
  title={Sdata[3].title}
  imgsrc={Sdata[3].imgsrc}
 link={Sdata[3].link}
/> 
<Card
  title={Sdata[4].title}
  imgsrc={Sdata[4].imgsrc}
 link={Sdata[4].link}
/> 
<Card
  title={Sdata[5].title}
  imgsrc={Sdata[5].imgsrc}
 link={Sdata[5].link}
/> 
 
<Card
  title={Sdata[6].title}
  imgsrc={Sdata[6].imgsrc}
 link={Sdata[6].link}
/> 

<Card
  title={Sdata[7].title}
  imgsrc={Sdata[7].imgsrc}
 link={Sdata[7].link}
/> 
  </>
  );
}

export default App;