import React, { Component } from "react";
import "./App.css";
import blog_img from "./blog_img.jpg";
import Blog from "./blog.js";
import BlogForm from "./blogForm.js";
import { config } from "./config/config";
import firebase from "firebase/app";
import "firebase/database";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as routes from "./routes";
import { Link } from "react-router-dom";

import BlogEditor from "./editor";
import BlogEdit from "./blogEdit";

class App extends Component {
  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(config);
    }
    this.database = this.app
      .database()
      .ref()
      .child("blogs");

    this.addBlog = this.addBlog.bind(this);
    this.removeBlog = this.removeBlog.bind(this);
    this.editBlog = this.editBlog.bind(this);

    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    const previousBlog = this.state.blogs;

    this.database.on("child_added", snap => {
      previousBlog.push({
        blogId: snap.key,
        blogContent: snap.val().blogContent
      });
      this.setState({
        blogs: previousBlog
      });
    });

    this.database.on("child_removed", snap => {
      for (var i = 0; i < previousBlog.length; i++) {
        if (previousBlog[i].id === snap.key) {
          previousBlog.splice(i, 1);
        }
      }
      this.setState({
        blogs: previousBlog
      });
    });
  }


  addBlog(blog) {
    this.database.push().set({ blogContent: blog });
  }

  removeBlog(blogId) {
    this.database.child(blogId).remove();
  }

  editBlog(blog) {
    this.database.update().set({ blogContent: blog });
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <nav>
            <div className="container">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo black-text sleek">
                  GAWDS 18
                </a>
                <a
                  href="#"
                  data-activates="mobile-demo"
                  className="button-collapse">
                  <i className="material-icons black-text">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li className="black-text">
                    <Link className="black-text sleek" to={routes.Blog_}>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="black-text sleek" to={routes.Editor_}>
                      Write a Blog!
                    </Link>
                  </li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                  <li>
                    <Link className="black-text sleek" to={routes.Blog_}>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="black-text sleek" to={routes.Editor_}>
                      Write a Blog!
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container">
            <Route
              exact
              path={routes.Blog_}
              component={() => (
                <div className="blog body">
                  <br />
                  <br />
                  {this.state.blogs.map(blog => {
                    return (
                      <div>
                        <Blog
                          blogContent={blog.blogContent}
                          blogId={blog.blogId}
                          key={blog.blogId}
                          editBlog={this.editBlog}
                          removeBlog={this.removeBlog}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            />

            <Route
              path="/BlogEdit/:blogId"
              render={props => <BlogEdit {...props} editBlog={this.editBlog} />}
            />

            <Route
              exact
              path={routes.Editor_}
              component={() => <BlogEditor addBlog={this.addBlog} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
