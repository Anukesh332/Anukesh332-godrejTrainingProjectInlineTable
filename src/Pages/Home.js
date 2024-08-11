import React, { useRef, useState } from "react";
import Posttable from "./Posttable";
import Postcard from "./Postcard";

export default function Home() {


  const viewSwitch = useRef();
  const [viewtype, setViewtype] = useState("card");

  const viewSwitchHandler = () => {
    if(viewSwitch.current.checked){
      setViewtype("table")
    }
    else{
      setViewtype("card")
    }
  }




  return (
    <>
      <div className="custom-control custom-switch">
        <input ref={viewSwitch}
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1" onChange={viewSwitchHandler} 
        />
        <label className="custom-control-label" htmlFor="customSwitch1">
          Card Type
        </label>
      </div>
      {viewtype==="card"?<Posttable/>: <Postcard  />}

    </>
  );
}
