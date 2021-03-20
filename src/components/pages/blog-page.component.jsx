import React, { Component, Fragment } from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Card, Badge, Button } from 'react-bootstrap'
import Spinner from '../layouts/spinner.component';

import './blog-page.style.scss'

export class BlogPage extends Component {

    componentDidMount(){
        console.log(this.props.match.params.id)
        this.props.getBlog(this.props.match.params.id)
    }

    handleDelete = async(e, id) => {
        e.preventDefault(id)
        await this.props.deleteBlog(id)

        this.props.history.push(`/`)
    }
    render() {
        const {
            id,
            title,
            author,
            content,
            likes,
            shares,
            tags} = this.props.blog

        if (!title){
            return <Spinner />
        } 
        
        return (
            <div className="container">
                <div className ="mt-4">
                    <Link to='/' className='btn btn-light text-muted'>
                        <i className="fa fa-chevron-left"/> Go Back
                    </Link>
                </div>
                <Card className="mt-4">
                    <Card.Body>
                        <Card.Title><h1>{title}</h1></Card.Title>
                        <Card.Subtitle className="text-muted">Author: {author}</Card.Subtitle>
                        
                        <div>
                            <div className="mb-0 mt-4" style={{display:"flex",justifyContent:"space-between"}}>
                                <span className="align-middle">
                                {
                                    tags.map((tag ,index) => (
                                        <Badge key={index} className="mr-1" variant='warning'>#{tag}</Badge>
                                    ))
                                }
                                </span>
                                <div>
                                    {likes >= 0 ? <Fragment><i className="far fa-star"></i> {likes}</Fragment> : ""}
                                    {shares >= 0 ? <Fragment><i className="fas fa-code-branch  ml-2"></i> {shares}</Fragment> : ""}
                                </div>
                            </div>
                            <div className="blog-page-content mt-4">
                                {content}
                            </div>
                           
                        </div>
                        <div className="mt-3" style={{display:"flex",justifyContent:"flex-end"}}>
                            <Link to={`/blogs/${id}/update`} className="btn btn-primary mr-3">Update</Link>
                            <Button onClick ={(e) => this.handleDelete(e,id)} className="btn btn-danger">Delete</Button>
                        </div>
                    </Card.Body>
            
                </Card>
                

            </div>
        )
    }
}

export default withRouter(BlogPage)

