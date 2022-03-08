import React from "react";
import Photo from "../../assets/me.jpg";
import "./Section2.css"
function Section2() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-end">
          <img src={Photo} width={500} className="img-style"/>
        </div>
        <div className="col-md-6 ">
          <h1 className="text-info">About Me</h1>
          <hr className="w-50" />
          <p className="text-muted">
            Reda loutfi , web developer , passioned by new technologies,<br />
            hard worked , with a big spirit
          </p>
          <br />
          <div className="row">
            <div className="col-md-2">
              <b>Name : </b>
            </div>
            <div className="col-md-3">
              <p>
                <span className="text-info"><b>Reda loutfi</b></span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <b>Date of birth:</b>
            </div>
            <div className="col-md-3">
              <p className=""> June the 1st , 1997</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
            <b>Address : </b>
            </div>
            <div className="col-md-3">
              <p className="">Casablanca Morroco</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
            <b>zip code : </b>
            </div>
            <div className="col-md-3">
              <p className="">26100</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
            <b>Email :</b>
            </div>
            <div className="col-md-3">
              <p className="">thehunter632@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
            <div className="col-md-12 text-center mt-3">
            <button className="btn btn-info">Download Cv</button>
            </div>
        </div>
      </div>

      
    </>
  );
}

export default Section2;
