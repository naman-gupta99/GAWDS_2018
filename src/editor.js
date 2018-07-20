import React, { Component } from 'react';
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as Draft from 'draft-js';

import './editor.css';

var newBlogContent = '';

class BlogEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.writeBlog = this.writeBlog.bind(this);
  }

  saveContent = content => {
    newBlogContent = JSON.stringify(convertToRaw(content));
    console.log(newBlogContent);
  };

  onEditorStateChange: Function = editorState => {
    const contentState = editorState.getCurrentContent();
    this.saveContent(contentState);
    this.setState({
      editorState
    });
  };

  writeBlog() {
    this.props.addBlog(newBlogContent);
    newBlogContent = '';
    this.setState({
      editorState: EditorState.createEmpty()
    });
  }

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <h2 className="Editor-heading"> Editor </h2>
        <div className="Editor">
          <br />
          <br />
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />

          <a
            className="waves-effect waves-light btn my-btn"
            onClick={this.writeBlog}>
            Post
          </a>
        </div>
      </div>
    );
  }
}
export default BlogEditor;
