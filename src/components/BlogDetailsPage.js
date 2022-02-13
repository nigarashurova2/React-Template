import React from 'react'
import { connect } from 'react-redux'
import BlogDetaisItems from './BlogDetaisItems'

const BlogDetailsPage = (props) => {
    return (
        <div>
            <BlogDetaisItems {...props.blog
            } />
        </div>
    )
}

const mapStateToProps = (state,props)=>{
    return {
        blog: state.blogs.find((blog)=>{
            return blog.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(BlogDetailsPage)