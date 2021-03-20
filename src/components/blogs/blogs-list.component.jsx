import React from 'react'

import BlogItem from './blog-item.component';

import './blogs.styles.scss'

const BlogsList = ({blogsList, editBlog}) => {
    return (
        <div className="blog-list">
            {
                blogsList.map(blog => (
                    <BlogItem 
                        key={blog.id} 
                        blog={blog}
                        editBlog={editBlog} />
                ))
            }
        </div>
    )
}

export default BlogsList
