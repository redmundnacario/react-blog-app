import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Form, Button as ButtonB, Card} from 'react-bootstrap'

// import TagsInput from '../layouts/tags-input.component'

class FormGroup extends Component {
    constructor(){
        super()

        this.state={
            title:"",
            author: "",
            content:"",
            tags: ["Back-end","Front-end"],
            likes: 0,
            shares: 0
        }
    }
    componentDidMount() {
        let title;
        let author;
        let content;
        
        if (this.props.blog) {
            ({title, author, content} = this.props.blog)
        }
        
        if (title){
            this.setState({title: title})
        } 
        if (author){
            this.setState({author:author})
        } 
        if (content){
            this.setState({content:content})
        } 
    }

    handleSubmit = async(e, data) =>{
        e.preventDefault()

        if (this.props.blog){
            console.log("here1")
            const {id} = this.props.blog
            await this.props.handleClick({id: id, data : data})
            this.props.history.goBack()
        } else {
            console.log("here2")
            await this.props.handleClick({data: data})
            this.props.history.push(`/`)
        }

        
    }
    render() {
        

        const {title, author, content} = this.state
        return (
            <Card className="mt-4">
                <Card.Body>
                    <h3>✏️ {this.props.blog ? "Update Article" : "Write a new article" }</h3>
                    <Form onSubmit={(e) => this.handleSubmit(e, this.state)}>
                        <Form.Group controlId="title">
                            <Form.Control size="lg" type="text" placeholder="New article title here..."
                                value={title ? title : ""}
                                onChange={(e) => this.setState({title:e.target.value})} required/>
                        </Form.Group>
    
                        <Form.Group controlId="author">
                            <Form.Control size="lg" type="text" placeholder="Author name here..."
                                value={author? author: ""}
                                onChange={(e) => this.setState({author:e.target.value})} required/>
                        </Form.Group>
    
                        <Form.Group controlId="content">
                            <Form.Control  size="lg" as="textarea" rows={10} placeholder="Write your content article here ..."
                                value={content ? content : ""}
                                onChange={(e) => this.setState({content:e.target.value})} required/>
                        </Form.Group>
    
                    
                        <ButtonB variant="primary" type="submit" onClick={null}>
                            Publish
                        </ButtonB>
                    </Form>
                    {
                        // <TagsInput/>
                    }
                    
                </Card.Body>
            </Card>
        )
    }
}

export default withRouter(FormGroup)

