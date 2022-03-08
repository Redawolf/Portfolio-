import React from "react";
import "./Section1.css";
import Typewriter from "typewriter-effect";
import img from "../../assets/img-1.png";

function Section1() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 bg-1  text-white position-relative ">
          <div className="content animate__animated animate__bounceInLeft">
            <h3>Hey ! I AM </h3>
            <br />
            <h2>
              Reda <b className="text-info">Loutfi</b>
            </h2>
            <br />
            <h1>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  strings: ["I'am a Web Developer", "I'am a Freelancer"],
                }}
              />
            </h1>
            <button className="btn btn-style text-white mt-3">
              Contact Me
            </button>
          </div>
        </div>
        <div className="col-md-6 bg-2 text-center ">
          <div className="content-2 animate__animated animate__bounceInRight">
          <img src={img} width={800} />
          {/* <img src={Dev} width='500'  /> <br/><br/>
           <h3>𝓟𝓻𝓸𝓰𝓻𝓪𝓶𝓶𝓲𝓷𝓰 𝓲𝓼𝓷'𝓽 𝓪𝓫𝓸𝓾𝓽 𝔀𝓱𝓪𝓽 𝔂𝓸𝓾 𝓴𝓷𝓸𝔀; 𝓲𝓽'𝓼 𝓪𝓫𝓸𝓾𝓽 𝔀𝓱𝓪𝓽 𝔂𝓸𝓾 𝓬𝓪𝓷 𝓯𝓲𝓰𝓾𝓻𝓮 𝓸𝓾𝓽 ..</h3> */}
          </div>
        </div> 
      </div>
    </>
    
  );
}

export default Section1;
