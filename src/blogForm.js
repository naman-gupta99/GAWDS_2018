import React , {Component} from 'react';
import './blogForm.css';

class BlogForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            newBlogContent: '',
        }
        this.writeBlog = this.writeBlog.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e){
        this.setState({
            newBlogContent: e.target.value,
        })
    }

    writeBlog(){
        this.props.addBlog(this.state.newBlogContent);
        this.setState({
            newBlogContent: '',
        })
    }

    render() {
        return(
            <div className="blog form">
            <input className="blog input"
            placeholder="write the blog....."
            value = {this.state.newBlogContent}
            onChange={this.handleUserInput}
            />
            <button className="blog button"
            onClick={this.writeBlog}> add blog </button>
            </div>
        );
    }
}

export default BlogForm;