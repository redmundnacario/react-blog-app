import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import FormGroup from '../forms/forms.component';

export class BlogUpdate extends Component {
   

    render() {
        return (
            <div className="container">
                <div className ="mt-4">
                    <Button onClick={this.props.history.goBack} className='btn btn-light text-muted'>
                        <i className="fa fa-chevron-left"/> Go Back
                    </Button>
                </div>
                <FormGroup  blog={this.props.blog} handleClick = {this.props.updateBlog}/>
            </div>
        )
    }
}

export default withRouter(BlogUpdate)
