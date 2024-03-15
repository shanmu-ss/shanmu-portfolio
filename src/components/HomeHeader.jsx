import React from 'react'
import HomePortfolio from '../components/HomePortfolio'

function HomeHeader() {
  return (
    <div>
      <div>
        <HomePortfolio />
        <br /> <br />
        <div className="container-fluid bg-dark d-flex align-items-start mb-5 py-5" id="home" style={{ minHeight: '100vh', display: 'flex' }}>
          <div className="container" style={{ flex: 1 , marginRight: '20px' }}>
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white display-2 font-weight-normal pt-5 mb-3">Hi, This is <span className="kode-mono-shanmu">SHANMU</span></h3>
                
                <h1 className="d-inline text-md-left font-weight-normal text-white">Associate Software Engineer</h1>
                <p className='text-white pt-3 mb-3'>Experienced Cloud Engineer with 2+ years in both professional and freelance settings. Dedicated to ongoing learning, I actively pursue skill improvement and stay current with the latest in Technology and DevOps. Proven track record of driving successful projects through proactive research and collaboration, fostering organizational growth.</p>
                <div className="d-none"></div>
                <div className="d-flex align-items-center justify-content-center pt-3">
                  <a href="doc/Resume.pdf" className=" btn btn-secondary mr-4">Download Resume</a>
                  {/* Add other buttons or links here */}
                </div>
                <br /> <br />
              </div>
              <div className="col-lg-6 px-8 pl-lg-1 pb-5 pb-lg-6 about-img" style={{ flex: 1, marginLeft: 'auto', marginRight: -300 }}>
                <img className="img-fluid w-50 rounded-circle shadow-sm" src="img/shanmu.png" alt="profile-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader