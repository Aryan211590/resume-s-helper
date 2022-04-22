import React from 'react';
import './Blog-one.css'
import blogi from '../images/blog.png'
import { Container, Row, Col } from "react-bootstrap";
// import Cartdesign from './Cartdesign';
import BlogCart from './BlogCart';
import { Link } from 'react-router-dom';
const Blog_one = () => {
  return (
    <>
      <div className="blog-one">
        <Container>
          <div className="blog-header">
            <Row>
              <Col md={6}>
                <h1>Resume's helper Blog</h1>
                <p>Whether you’re creating your first resume online or you’re a seasoned professional, ResumeHelper is here to help you get the most out of your resume.</p>
                <Link className="started mt-4" to="/editor">Create my resume</Link>
              </Col>
              <Col md={6}>
                <img src={blogi} alt="" srcSet="" />
              </Col>
            </Row>
          </div>
          <hr></hr>
          <div className="blog-card">
            <Row>
              <BlogCart/>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog_one;
