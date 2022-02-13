import React from 'react'


const BlogDetaisItems = ({id,title,description}) => {
    return (
        <div>
            <p>blog id: {id}</p>
            <p>blog title: {title}</p>
            <p>blog description: {description}</p>
        </div>
    )
}

export default BlogDetaisItems