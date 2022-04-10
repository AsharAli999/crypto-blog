import React from 'react';
import blogData from '../Data/Data';


const PostCard = (props) => {
  return <>
<div className="container ms-4">

  <div className="card border-warning m-3 d-flex" style={{maxWidth: "18rem"}}>
  <img src={props.imageUrl} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
  </div>
</div>
</div>
  </>;
};

export default PostCard;
