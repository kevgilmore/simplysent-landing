import "./style.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReactStars from "react-rating-stars-component";

const Popup = () => {
  const [hidePopup, setHidePopup] = useState(false);

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setHidePopup(true);
  };

  return (
    <div
      className="popup rounded-t-xl h-60 w-52 bg-zinc-700"
      hidden={hidePopup}
    >
      <div className="star-feedback">
        <IoIosArrowDown
          onClick={() => setHidePopup(true)}
          size="24px"
          className="absolute fill-white top-2 right-2"
        />

        <h2 className="p-8 text-white text-lg font-bold">
          How do you like the page?
        </h2>

        <div className="h-0.5 w-20 bg-yellow-600 relative left-5"></div>
        <div className="inline-block pt-4">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={32}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
      </div>

      <div className="thank-you">
        
      </div>
    </div>
  );
};

export default Popup;
