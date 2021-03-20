import React from 'react'
import { useHistory } from 'react-router-dom';
import {Card, Badge} from 'react-bootstrap'

const BlogItem = ({blog , editBlog}) => {
    let history = useHistory();

    let {
        id,
        title,
        author,
        content,
        likes,
        shares,
        tags,
        } = blog
    
    const shortContent = content.slice(0,60)

    const handleShares= (e) =>{
        // e.preventDefault()
        e.stopPropagation()
        shares ++
        editBlog({id, data:{shares}})
        // console.log(e.target)
    }

    const handleLikes =  (e) =>{
        // e.preventDefault()
        e.stopPropagation()
        likes ++
        editBlog({id, data:{likes}})
        // console.log(e.target)
    }

    return (
        <Card  className = "blog-item"  onClick={() => { history.push(`/blogs/${id}`) }}>
            <Card.Body>
                <Card.Title>🚀 {title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                <div>
                    <div>
                        {shortContent} ...
                    </div>
                    <div className="mb-0 mt-2" style={{display:"flex",justifyContent:"space-between"}}>
                        <span className="align-middle">
                        {
                            tags.map((tag, index) => (
                                <Badge key={index} className="mr-1" variant='warning'>#{tag}</Badge>
                            ))
                        }
                        </span>
                        <div>
                            {
                            likes >= 0 
                                ? <button 
                                    onClick={(e) => handleLikes(e)}
                                    className="btn p-0">
                                    <i className="far fa-star"></i> {likes}
                                  </button> 
                                : ""
                            }
                            {
                            shares >= 0 
                                ? <button 
                                    onClick={(e) => handleShares(e)}
                                    className="btn p-0 ml-2">
                                    <i className="fas fa-code-branch"></i> {shares}
                                  </button>
                                : ""
                            }
                        </div>
                    </div>
                    
                </div>
            </Card.Body>
        </Card>
    )
}

export default BlogItem
