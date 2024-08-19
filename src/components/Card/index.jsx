import { Link } from "react-router-dom"

const Card = ({ id, image, title, content }) => {



	return (
		<>
			<Link to={`/blogs/${id}`}>
				<div className=" fore inline-flex w-72 h-96 overflow-hidden max-w-sm m-2 bg-white text-start text-black rounded-lg shadow-md shadow-white">
					<div>
						<div>
							<img src={image} className="w-full"></img>
						</div>
						<div className=" inline-flex h-20 font-semibold text-xl p-2 ">
							{title}
						</div>
						<div className=" font-sans font-normal text-xs p-2">{content}</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export { Card }
