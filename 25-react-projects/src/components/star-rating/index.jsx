import {FaStar} from 'react-icons/fa';
import {useState} from 'react';
import './styles.css'

export default function StarRating({noOfStars, size}) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	function handleClick(index) {
		setRating(index);
	}

	function handleMouseEnter(index) {
		setHover(index);
	}

	function handleMouseLeave() {
		setHover(rating);
	}

	return (
		<div className="star-rating">
			{
				[...Array(noOfStars)].map((_, index) => {
					index += 1
					return <FaStar
						key={index}
						className={index <= (hover || rating) ? 'active': 'in-active'}
						onClick={() => handleClick(index)}
						onMouseMove={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLeave()}
						size={size}
					/>
				})
			}
		</div>
	)
}