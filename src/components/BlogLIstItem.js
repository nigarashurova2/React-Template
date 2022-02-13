import React from 'react'
import { Link } from 'react-router-dom';


const BlogLIstItem = ({id,title}) => {
    return (
        <>
            <li >{title}- <Link to={`/blogs/${id}`}>Details</Link></li> 
         
        </>
    )
}

export default BlogLIstItem