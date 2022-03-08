import React from 'react'
import Grade from '../../assets/grades.png'
import Resume from '../../assets/resume.png'
function Section3() {
  return (
    <>
      <div className='row'> 
          <div className='col-md-6 '>
              <img src={Resume} width={800} />
          </div>
          <div className='col-md-6'>
               <h1 className='text-info'>Education</h1>
               <div className='sec-1 mt-5'>
                 <div className='d-flex'>
                 <img src={Grade} width={50} /> 
                 <b className='text-info m-3'>2014/2015</b>
                 </div>
                 <h3>High school degree in Physiques</h3>
                 <h4 className='mt-3'>EL Jadida School</h4>
               </div>
               <hr className='w-75'/>
               <div className='sec-1 mt-5'>
                 <div className='d-flex'>
                 <img src={Grade} width={50} /> 
                 <b className='text-info m-3'>2015/2017</b>
                 </div>
                 <h3>Specialized technician in programming</h3>
                 <h4 className='mt-3'>Ofppt</h4>
               </div>
               <hr className='w-75'/>
               <div className='sec-1 mt-5'>
                 <div className='d-flex'>
                 <img src={Grade} width={50} /> 
                 <b className='text-info m-3'>2018/2017</b>
                 </div>
                 <h3>Bachelor web developement</h3>
                 <h4 className='mt-3'>fst settat It learning</h4>
               </div>
               <hr className='w-75'/>
               <div className='sec-1 mt-5'>
                 <div className='d-flex'>
                 <img src={Grade} width={50} /> 
                 <b className='text-info m-3'>2019/2022 (present)</b>
                 </div>
                 <h3>Web Developer at UX CENTERS</h3>
                 <h4 className='mt-3'>fst settat It learning</h4>
               </div>

          </div>
      </div>
    </>
  )
}

export default Section3