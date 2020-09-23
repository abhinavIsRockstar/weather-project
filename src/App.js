import React, {useEffect} from 'react';
import './App.css';
import Forms from './components/Form';
import FormikContainer from './components/FormikContainer';
import Weather from './components/Weather';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import MainContent from './components/MainContent';
import LogIn from './components/LogIn'
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'


function App() {

  useEffect(()=> {
    console.log('use effect has been created');
    localStorage.setItem('userInfo',[])
   
   
},[])

  return (
    <Router>
    <div className="App">
      
      {/* <Home />
      <About />
      <Contact /> */}
      {/* <Navigation /> */}
      {/* <Forms /> */}
      {/* <MainContent /> */}
      {/* <FormikContainer /> */}
      {/* <Weather /> */}
      {/* <Footer /> */}
            
            <Route path='/' exact component={Home}/>
            {/* <Route path='/home'  component={Home}/> */}
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Switch>
            <Route path ='/signup' component = {FormikContainer}/>
            <Route path ='/login' component = {LogIn}/>
            <Route path='/home'  component={Home}/>
            </Switch>
            
    </div>
            
    </Router>
    
  );
}

export default App;
