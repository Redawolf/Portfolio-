import React from "react";
import {ProgressBar} from 'react-bootstrap'
function Section4() {
  const styling  ={
    marginTop:"150px"
  }
  return (
    <>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h3 className="text-info"><u>Skills</u></h3>
        </div>
      </div>
      <div className="row " style={styling}>
        <div className="col-md-3">
          <div className="card">
           
            <div className="card-body">
               <div className="card-title text-center">
              HTML
            </div>
            <ProgressBar label="100 %" now={100} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
        <div className="card">
            <div className="card-body">
            <div className="card-title text-center">
              CSS
            </div>
            <ProgressBar label="80 %" now={80} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
        <div className="card">
            <div className="card-body">
            <div className="card-title text-center">
              JAVASCRIPT
            </div>
            <ProgressBar label="45 %"  now={45} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
        <div className="card">
            <div className="card-body">
            <div className="card-title text-center">
              PHP
            </div>
            <ProgressBar label="60 %" now={60} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Section4;
