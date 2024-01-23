import React from "react";
import { Row, Col, Card, Image, ListGroup, ListGroupItem } from "react-bootstrap";

const AuthorPage = () => {
  return (
    <div className="author-page">
      <Row>
        <Col md={4}>
          <Image src={"..."} alt={"karthick"} roundedCircle className="author-image" />
          <h2 className="author-name">karthick</h2>
          <p className="author-bio">bio goes here</p>
          <ListGroup className="social-links">
            <ListGroupItem href="#">
              <i className="fab fa-twitter" /> Twitter
            </ListGroupItem>
            <ListGroupItem href="#">
              <i className="fab fa-facebook-f" /> Facebook
            </ListGroupItem>
            <ListGroupItem href="#">
              <i className="fab fa-instagram" /> Instagram
            </ListGroupItem>
          </ListGroup>
        </Col>

      </Row>
    </div>
  );
};

export default AuthorPage;
/*  <Col md={8}>
          {featuredPost && (
            <Card className="featured-post">
              <Card.Img variant="top" src={featuredPost.image} alt={featuredPost.title} />
              <Card.Body>
                <Card.Title>{featuredPost.title}</Card.Title>
                <Card.Text>{featuredPost.content.substring(0, 200) + "..."}</Card.Text>
                <a href={`/posts/${featuredPost.id}`}>Read More</a>
              </Card.Body>
            </Card>
          )}
          <hr />
          <h2>Latest Articles</h2>
          <Row>
            {posts
              .filter((post) => !post.featured) // Avoid showing featured post again
              .map((post) => (
                <Col md={4} key={post.id}>
                  <Card>
                    <Card.Img variant="top" src={post.image} alt={post.title} />
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.content.substring(0, 100) + "..."}</Card.Text>
                      <a href={`/posts/${post.id}`}>Read More</a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>*/