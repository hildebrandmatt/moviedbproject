import StarRatings from 'react-star-ratings';
//starratings is in the package/package-lock.json
 
const RatingStars = props => {
  
  return (
    <StarRatings
    rating={props.rating / 2}
    starRatedColor="#ca2b2f"
    starEmptyColor="#1e1c1c"
    starDimension="18px"
    starSpacing="2px"
    numberOfStars={5}
    name='rating'
  />
  )
}

export default RatingStars;