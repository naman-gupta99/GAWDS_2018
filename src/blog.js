import React , {Component} from 'react';
import './blog.css';
import Proptypes from 'prop-types';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import BlogEdit from './blogEdit';
import { Link } from 'react-router-dom';
import * as routes from './routes';

let theObject;

class Blog extends Component{

    constructor(props){
        super(props);
        this.blogContent = props.blogContent;
        this.blogId = props.blogId;
        this.handleRemoveBlog = this.handleRemoveBlog.bind(this);
        
        
    }

    handleRemoveBlog(blogId){
        this.props.removeBlog(blogId);
    }

    componentWillMount(){
        theObject = JSON.parse( this.blogContent );
        console.log(this.blogContent);
    } 


    render(props) {
        return(
            <div className = "blog header">
            {
                Array.from(Array(theObject.blocks.length), (e, i) => {
                    return <p key={i}>{theObject.blocks[i].text}</p>
                })}
            
                
                <div className="row">
                <div className="col s2">
                    <Link to={`/BlogEdit/${this.blogId}`}
                         className="waves-effect waves-light btn">Edit
                    </Link>
                </div>
                <div className="col s2"></div>
                <div className="col s2"><a className="waves-effect waves-light btn"  onClick={() => this.handleRemoveBlog(this.blogId)}>Delete</a></div>
                </div>            
            </div>
        );
    }
}

Blog.proptypes = {
    blogContent: Proptypes.string
}

export default Blog;