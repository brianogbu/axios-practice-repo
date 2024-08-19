import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { fetchBlog } from '../../api/fetchblog.api'




function ReadPost() {
	const { id } = useParams()
	const [post, setPost] = useState(null)

	React.useEffect(() => {
		if (id) {
			fetchBlog(id).then(({ data }) => {
				console.log({ data })
				setPost(data)
			})
		}
	}, [id])

	if (!post) {
		return <>no post found</>
	}
	return (
		<>
			<div className="grid overflow-clip place-content-center w-1/2 m-auto bg-white text-start text-black rounded-xl shadow-md shadow-white">
				<div>
					<div>
						<img src={post.image} className="w-full"></img>
					</div>
					<div className=" inline-flex h-20 font-semibold text-2xl p-2 ">
						{post.title}
					</div>
					<div className=" font-sans font-normal text-xl p-2">{post.content}</div>
				</div>
			</div>
		</>
	)
}

export default ReadPost
