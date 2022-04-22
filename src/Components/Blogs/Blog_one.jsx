import React from 'react';
import './Blog-one.css'
import blogi from '../images/blog.png'
import { Container, Row, Col } from "react-bootstrap";
// import Cartdesign from './Cartdesign';
import BlogCart from './BlogCart';
const Blog_one = () => {
  return (
    <>
      <div className="blog-one">
        <Container>
          <div className="blog-header">
            <Row>
              <Col md={6}>
                <h1>Resume's helper Blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque tempore dolores voluptas rerum nisi autem
                  reprehenderit nesciunt sit
                  sapiente iste consequatur iusto aut dolorem sunt, corporis
                  suscipit? Porro, dolore magnam.</p>
                <a className="started mt-4" href="dfkahsdkfjh">Create my resume</a>
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
