import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ReadPost from './pages/Read-post'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
	{
		path: '/blogs/:id/',
		element: <ReadPost />,
	},
])

export { router }
