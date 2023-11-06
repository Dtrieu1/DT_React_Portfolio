import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';
import profile_pic from '/Images/David.jpg';
import '../components/styles/About.css'

export default function About() {
  return (

    <div className='container'>
      <h1>About</h1>
      <MDBContainer className="container">
        <MDBRow className='mb-3'>
          <MDBCol>
            Hi there! I have a background in Management Information Systems and Marketing. <br></br>
            Throughout the years, I was fortunately enough to experience a role that is related to IT healthcare and business.
            With this experience, it has led to me considering to be more exposed into the IT space
            so that I can become a more well-rounded resource not only for my own personal growth,
            but also to the organization.
            <br></br>
            <br></br>
            Besides that, please feel free to browse through this website! <br></br>
            If you would like to reach me, feel free to visit one of the social media icons below! <br></br>
            You can also select the "contact" tab as another avenue to reach me!
          </MDBCol>
          <MDBCol>
            <img src={profile_pic} alt="profile_pic" ></img>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
