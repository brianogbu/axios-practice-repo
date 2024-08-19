import axios from 'axios'

const url = 'https://jsonplaceholder.org/posts'

async function fetchAllBlogs() {
	try {
		return await axios(url, {
			headers: {
				Accept: 'application/json',
			},
		})
	} catch (error) {
		console.log(error.response)
	}
}

export { fetchAllBlogs }
