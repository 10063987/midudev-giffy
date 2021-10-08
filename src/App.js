import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import Detail from './components/Detail';
import { Route } from 'wouter'
import Home from './pages/Home/index';


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Home />        
        <Route path="/gif/:topic" component={ListOfGifs}
        />
        <Route path="/detail/:id" component={Detail} />
      </section>
    </div>
  );
}

/**
 * PropTypes
 */

export default App;
