import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';

export default function Contact() {
  return (

    <div className='container'>
      <h1 className='text-center'>Contact</h1>
      <div className='p-2'>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name:</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name"></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email"></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Message'></textarea>
        </div>
        <div className='text-center'><button type="button" class="btn btn-primary">Submit</button></div>
      </div>
    </div >

  );
}
