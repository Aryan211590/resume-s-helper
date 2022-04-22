import React ,{useEffect}from 'react';
import Blog_one from './Blogs/Blog_one';
import Footer from './Footer';
import Header from './Header';
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, [])
  return (
      <>
      <Header/>
      <Blog_one/>
      <Footer/>
      </>
  );
};

export default Blog;
