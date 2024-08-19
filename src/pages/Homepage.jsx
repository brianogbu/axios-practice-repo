import React, { useEffect } from 'react'

import { Card } from '../components/Card/index.jsx'
import { fetchAllBlogs } from '../api/blog.api'

function Homepage() {
	const [blogs, setBlogs] = React.useState([])

	useEffect(() => {
		fetchAllBlogs()
			.then(({ data }) => {
				console.log({ data })
				setBlogs(data)
			})
			.catch((err) => {
				throw new Error(err)
			})
	}, [])
	
	return(
        <>
        {blogs.map((blog) => {
            return (
                <Card
				image={blog.image}
				id={blog.id}
				title={blog.title}
				content={blog.content}
                />
            )
        })}
        </>
    )
}


export default Homepage
