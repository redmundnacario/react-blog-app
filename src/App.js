import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layouts/navbar.component';

import Home from './components/pages/home.component';
import About from './components/pages/about.component';
import BlogPage from './components/pages/blog-page.component';
import BlogCreate from './components/pages/blog-create.component';
import BlogUpdate from './components/pages/blog-update.component';

import './App.scss';

class App extends Component {
  constructor(){
    super()
    this.state = {
      blogsList : [],
      blog : {},
      isLoading : false
    }
    this.url = `http://localhost:3000/api/v1/blogs/`
  }

  async componentDidMount(){
    this.getBlogsList()
  }

  getBlogsList = async() => {
    this.setState({isLoading:true})
    //fetch the blogs
    const res = await fetch(this.url)
                  .then(result => result.json())
                  .then(result => result.data)

    this.setState({blogsList:res, isLoading:false})
  }

  getBlog = async(id) => {
    const res = await fetch(`${this.url}${id}`)
                  .then(result => result.json())
                  .then(result => result.data)
    this.setState({blog : res})
  }

  createBlog = async({data}) =>{

    console.log("Create blog", data)
    const res = await fetch( this.url,
                  {
                    method: 'POST',
                    headers: {
                      'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })
    
    // const savedData = await res.json()

    // fetch success or not
    if (res.status === 200){
      alert('Blog created.')
      this.getBlogsList()
    } else {
      alert('Error in creating blog.')
    }
  }

  editBlog = async({id, data}) => {
    const res = await fetch(`${this.url}${id}`, 
                      {
                        method: 'PATCH',
                        headers: {
                          'Content-type': 'application/json',
                        },
                        body: JSON.stringify(data),
                      })
    
    // const data = await res.json()

    if (res.status === 200){
      this.getBlogsList() 
    } else {
      alert('Error in updating blog.')
    }
  }

  updateBlog = async({id, data}) =>{
    console.log(data)
    const res = await fetch(`${this.url}${id}`, 
                      {
                        method: 'PUT',
                        headers: {
                          'Content-type': 'application/json',
                        },
                        body: JSON.stringify(data),
                      })
    // const data = await res.json()

    if (res.status === 200){
      alert('Blog updated.')
      this.getBlogsList() 
    } else {
      alert('Error in updating blog.')
    }
  }

  deleteBlog = async(id) => {
    console.log("Delete blog", id)
    const res = await fetch(`${this.url}${id}`, {
      method: 'DELETE'
    })

    if (res.status === 200 ){
      alert('Blog was succesfully deleted.')
      this.setState({blogsList : this.state.blogsList.filter(blog => blog.id !== id)})
    } else{
      alert('Error in deleting this blog.')
    }
      
    
  }

  render () {
    const {blogsList, blog, isLoading} = this.state

    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>

            <Route exact path="/" render={props => (
              <Home
                blogsList = {blogsList}
                isLoading = {isLoading}
                editBlog = {this.editBlog}
              />
            )}/>

            <Route exact path="/about" component={About}/>

            <Route exact path="/blogs/create" render={ props => (
              <BlogCreate 
                {...props}
                createBlog = {this.createBlog}
              />
            )}/>

            <Route exact path="/blogs/:id" render={props =>(
              <BlogPage 
                {...props}
                blog = {blog}
                getBlog = {this.getBlog}
                deleteBlog = {this.deleteBlog}
              />
            )}/>
              

            <Route exact path="/blogs/:id/update" render={props =>(
              <BlogUpdate 
                {...props}
                blog = {blog}
                updateBlog = {this.updateBlog}
              />
            )}/>
              
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
