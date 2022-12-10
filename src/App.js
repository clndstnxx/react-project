import React from 'react';
import './App.css';
import Header from './Header'
import Card from './Card'
import Image from './Image';
import Projects from './Projects';
import User from './user';
import Show from './show';
function App() {
  return (
    <div>
    <Header 
    />
    <Image/>
   <Card />
   <Projects />
   <Show/>
   <User/>

    </div>
  );
}

export default App;
