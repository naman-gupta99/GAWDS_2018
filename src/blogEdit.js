import React, { Component } from 'react';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as Draft from "draft-js";


var newBlogContent = '';


class BlogEdit extends Component {

    constructor(props){
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
        }

        

       this.edit_Blog = this.edit_Blog.bind(this);
    }
    
    saveContent = (content) => {
        newBlogContent = JSON.stringify(convertToRaw(content));
        //console.log(newBlogContent);

      }

    onEditorStateChange: Function = (editorState) => {
        const contentState = editorState.getCurrentContent();
        this.saveContent(contentState);
        this.setState({
        editorState,
        
        });
    };

    edit_Blog(){
        this.props.editBlog(this.blogId);
        this.props.addBlog(newBlogContent);
        newBlogContent = '';
        this.setState({
            editorState: EditorState.createEmpty(),
            
        })
        
        
    }

   

  render() {
    const { editorState } = this.state;
    const {match: { params } } = this.props;
    const { blogId } = params;
    console.log(blogId);
    
    return (
      <div className = "Editor">
      <br/><br/>
      
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        
        <a className="waves-effect waves-light btn"  onClick={this.edit_Blog}>Edit</a>

      </div>
    );
  }
}

export default BlogEdit;
