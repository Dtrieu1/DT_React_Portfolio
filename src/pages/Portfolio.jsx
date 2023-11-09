import React from 'react';
import tech_blog from '/Images/Tech_Blog.jpg';
import '../components/styles/Portfolio.css';
import quotaku from '/Images/Quotaku.png';

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
              <h5 class="card-title text-center">Success card title</h5>
              <img className="rounded mx-auto d-block" src={tech_blog}></img>
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="#" target="_blank" className="btn btn-primary">Application</a>
            </div>
          </div>
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">Success card title</h5>
              <img className="rounded mx-auto d-block" src={tech_blog}></img>
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="#" target="_blank" className="btn btn-primary">Application</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">Quotaku</h5>
              <img className="rounded mx-auto d-block" src={quotaku}></img>
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/s0m3y3/Quotaku" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="https://s0m3y3.github.io/Quotaku/" target="_blank" className="btn btn-primary">Application</a>
            </div>
          </div>
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">Success card title</h5>
              <img className="rounded mx-auto d-block" src={tech_blog}></img>
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="#" target="_blank" className="btn btn-primary">Application</a>
            </div>
          </div>
          <div class="card border-secondary mb-3">
            <div class="card-body">
              <h5 class="card-title text-center">Success card title</h5>
              <img className="rounded mx-auto d-block" src={tech_blog}></img>
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="" target="_blank" className="btn btn-primary mx-2">Github</a>
              <a href="#" target="_blank" className="btn btn-primary ">Application</a>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}
