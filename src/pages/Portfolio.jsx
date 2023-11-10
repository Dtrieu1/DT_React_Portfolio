import React from 'react';
import tech_blog from '/Images/Tech_Blog.jpg';
import '../components/styles/Portfolio.css';
import quotaku from '/Images/Quotaku.png';
import dadicated from '/Images/DAD-ICATED.jpg';
import social_network from '/Images/social_network.jpg';
import Readme_Generator from '/Images/Readme_Generator.jpg';
import Work_Day from '/Images/Work_Day_Scheduler.jpg';

export default function Portfolio() {
  return (

    // Utilize row and column to showcase items 
    <div className='container'>
      <h1 className="text-center mb-3">Portfolio</h1>
      {/* Margin Bottom 3 */}
      <div className="row mb-3">
        <div className="col">
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">Tech Blog</h5>
              <img className="rounded mx-auto d-block" src={tech_blog}></img>
              <p class="card-text text-center">This application provides you a space to submit your blogs posts. As you continue to explore using the application, you would even be able to sign up so that you are able to keep track of your progress in one single stop. Check it out!</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/Dtrieu1/DT_Tech_Blog" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="https://dt-tech-blog-4afd8046cc12.herokuapp.com/" target="_blank" className="btn btn-primary">Application</a>
            </div>
          </div>
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">DAD-ICATED</h5>
              <img className="rounded mx-auto d-block" src={dadicated}></img>
              <p class="card-text text-center">
                DAD-ICATED is a dad joke ranking application that allows users to see dad jokes whether in a list or randomly generated.
                You would be able to also vote on these jokes and be able to submit your own as well.<br></br> Check it out!

              </p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/Dtrieu1/DAD-ICATED" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="https://dad-icated-6a2b4854840e.herokuapp.com/" target="_blank" className="btn btn-primary">Application</a>
            </div>
          </div>
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">Social Network API</h5>
              <img className="rounded mx-auto d-block" src={social_network}></img>
              <p class="card-text text-center">
                Social Network API provides you functionality on how you can update and store information about users.
                The information that is tracked consist of the the user's friends, thoughts, and reactions.
                The intent is to focus on ways tp utilize MongoDB and Mongoose.</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/Dtrieu1/DT_Social_Network_API" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="https://drive.google.com/file/d/1pg5EmQBx3h1QMAsL3cevfFR-hG18dXp6/view" target="_blank" className="btn btn-primary">Demo</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">Quotaku</h5>
              <img className="rounded mx-auto d-block" src={quotaku}></img>
              <p class="card-text text-center">Interested in using Quotaku!
                Well that is what our ease of use application is for!
                Quotaku allows you to search your favorite character and find those famous quotes for you.
                Let us do the work so you have more time watching those favorite shows!</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/s0m3y3/Quotaku" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="https://s0m3y3.github.io/Quotaku/" target="_blank" className="btn btn-primary">Application</a>
            </div>
          </div>
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">Readme Generator</h5>
              <img className="rounded mx-auto d-block" src={Readme_Generator}></img>
              <p class="card-text text-center"> The intent is to provide a more streamlined way to create a Readme file. You would be able to through the command line to acquire those certain instructions.
                The application would request for an input for each section of information that needs to be included.</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/Dtrieu1/DT_Professional_README_Generator" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="https://drive.google.com/file/d/1TATQ76qS6lLOyGpt4WZKAKaaElBPIcoc/view" target="_blank" className="btn btn-primary">Demo</a>
            </div>
          </div>
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">Work Day Scheduler</h5>
              <img className="rounded mx-auto d-block" src={Work_Day}></img>
              <p class="card-text text-center">This Project is to showcase the functionality of displaying a dynamic work day schedule.
                When you launched the website, you will see the current time displaye to the very second and color coding will be applied to highlight the specified timeslot you will be partaking.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/Dtrieu1/DT-Third-Party-API-Challenge" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="https://dtrieu1.github.io/DT-Third-Party-API-Challenge/" target="_blank" className="btn btn-primary ">Application</a>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}
