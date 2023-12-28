import ReactStars from "react-rating-stars-component";

const StarRating = ({ handleSubmit }) => {
    return (
            <div className="inline-block pt-4">
              <ReactStars
                count={5}
                onChange={handleSubmit}
                size={32}
                emptyIcon={<i className="far fa-star"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div> 
)}

export default StarRating;