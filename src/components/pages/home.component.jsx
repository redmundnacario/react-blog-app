import React from 'react'
import { Link} from 'react-router-dom'

// import Button from '../layouts/buttons.component';
import BlogsList from '../blogs/blogs-list.component'

const Home = ({blogsList, isLoading, editBlog}) => {
    // let history = useHistory();

    // console.log(blogsList)
    return (
        <div className="home container">
            <div className="home-title">
                <h3 className="">📎 Articles</h3>
                <Link to='/blogs/create' className="btn btn-primary">Create</Link>
            </div>
            <BlogsList editBlog={editBlog} blogsList ={blogsList}/>
        </div>
    )
}

export default Home



