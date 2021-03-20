import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import FormGroup from '../forms/forms.component';

export class BlogCreate extends Component {
   

    render() {
        return (
            <div className="container">
                <div className ="mt-4">
                    <Link to='/' className='btn btn-light text-muted'>
                        <i className="fa fa-chevron-left"/> Go Back
                    </Link>
                </div>
                <FormGroup handleClick = {this.props.createBlog}/>
            </div>
        )
    }
}

export default BlogCreate
