import logo from './logo.svg';
import './App.css';
import React, { useState,useRef } from 'react';
import USAMap from "react-usa-map";
import MapRenderHelper from './MapRenderHelpers.js'


var state_string_test = "";
function App() {
  const [show, setShow] = useState(false);
  const [prevState, setCurrent] = useState("");

  var map_helper = new MapRenderHelper();

  const mapprop = useRef(null);

  const handleLeave = () => {
    
    setShow(false);
    // console.log("on leave: ",show)
  };
  
  function handleHover  (e)  {
      let current_elem = e.target.dataset.name;
      console.log(mapprop);
      console.log("dataset ",e.target.dataset.title)
      let obj_len = Object.keys(e.target.dataset).length ;
      if (obj_len > 0 && prevState != current_elem ){

        setCurrent(current_elem);
        
        // console.log(e.target.dataset);
        // console.log(show)

        setShow(true);
        
        state_string_test = current_elem;
      }else if (obj_len == 0 ){
        setCurrent("");
        setShow(false);

      }
  };

  return (

      <div id = "root" className="App"  onMouseOver={(e) => handleHover(e)} onMouseOut={() => handleLeave()}>
          
          <USAMap ref={mapprop} customize = {map_helper.stateConfig()}/>
          {
              show? <div><h1>{state_string_test}</h1></div>:null
          }
      </div>
  );
}

export default App;
