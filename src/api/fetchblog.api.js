import axios from 'axios'

async function fetchBlog(id) {
	try {
		return await axios(`https://jsonplaceholder.org/posts/${id}`, {
			headers: {
				Accept: 'application/json',
			},
		})
	} catch (error) {
		console.log(error.response)
	}
}

export { fetchBlog }
