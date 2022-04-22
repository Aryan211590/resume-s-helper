import React from 'react';
import Blogarray from './Blogarray';
import Blog_one from './Blog_one';
import Cartdesign from './Cartdesign';



const BlogNCart = (value) => {
    return (
        <>
        <Cartdesign
        Key={value.Key}
        heading={value.heading}
        content={value.content}
        linkTo={value.linkTo}
        />
        </>
    );
  };

const BlogCart = () => {
  return (
      <>
      {Blogarray.map(BlogNCart)}
      </>
  );
};

export default BlogCart;
