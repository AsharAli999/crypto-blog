import React from 'react';
import blogData from '../Data/Data';
import PostCard from './PostCard';

const RecentPosts = () => {
  return <>
  
  <div className="container d-flex">

     <div className="heading">
         <h1>Recent Posts</h1>
         <div className="d-flex mx-auto">
         {
             blogData.map((posts,ind)=>{

                return <PostCard key={ind}
                   imageUrl={posts.imageUrl}
                   title={posts.title}
                   description={posts.description}
                    />
                            
             }
              
             )
         }
         </div>
         
     </div>

  </div>
  
  </>;
};

export default RecentPosts;
