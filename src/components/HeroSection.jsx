import React from 'react';

const HeroSection = () => {
  return <>
  
  <div className="container d-flex mt-5 align-center">
      <div className="right" style={{height:"500px",width:"1000px"}}>
           <h1 className='mt-4'>Get Crypto related Knownedge</h1>
           <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quisquam! Iste commodi blanditiis reiciendis corrupti repellendus est atque ab! Fuga vel eaque expedita totam eum, nam sequi sapiente ratione error iste delectus corporis autem inventore excepturi tempora neque suscipit? Esse veniam vero provident unde commodi beatae libero, sapiente quisquam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque, molestiae consequuntur necessitatibus magnam debitis amet fugit similique sequi eligendi adipisci error est vitae labore facilis maxime consequatur vel nulla iure voluptas magni delectus fugiat? Ullam debitis dolorum similique delectus ex fuga earum excepturi illo id beatae. Quidem, nostrum sequi.</p>
           <button type="button" class="btn btn-warning mt-3">Check Posts</button>
      </div>

      <div className="left ms-5">
      <img src="https://bitcoin.org/img/icons/opengraph.png?1643058474" class="img-thumbnail" alt="..." height="400px" width="500px"/>
      </div>
  </div>
  
  </>;
};

export default HeroSection;
