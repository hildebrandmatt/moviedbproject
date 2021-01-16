import StarRatings from '../react-star-ratings';
 
//crying noises
class Foo extends Component {
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      return (
        <StarRatings
          rating={this.movie.rating}
          starRatedColor="red"
          changeRating={this.changeRating}
          numberOfStars={10}
          name='rating'
        />
      );
    }
}