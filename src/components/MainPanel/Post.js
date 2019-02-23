import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { updateCodeSyntaxHighlighting } from "../../index";

class Post extends Component {
  componentDidMount() {
    updateCodeSyntaxHighlighting();
  }

  componentDidUpdate() {
    updateCodeSyntaxHighlighting();
  }

  PostContainer = () => {
    const post = this.props.posts.find(
      post => post.id === this.props.routeParamId
    );
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.shortDescription}</p>
        <div
          className="content pt-3"
          dangerouslySetInnerHTML={{ __html: post.text }}
        />
      </div>
    );
  };

  render() {
    return (
      <Container>
        <this.PostContainer />
      </Container>
    );
  }
}

export default Post;
