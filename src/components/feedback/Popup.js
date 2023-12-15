import "./style.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { useFlags } from "flagsmith/react";

const Popup = () => {
  const flags = useFlags(["feedback_popup"]);
  const [hidePopup, setHidePopup] = useState(false);
  const [hideThankYou, setHideThankYou] = useState(true);
  const [hideStarFeedback, setHideStarFeedback] = useState(false);

  const handleSubmit = (response) => {
    setHideStarFeedback(true);
    setHideThankYou(false);
    
    // send response to lambda
    setTimeout(() => {
        fetch("https://zgxbj5zic1.execute-api.us-east-1.amazonaws.com/dev/",
            {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ questionId: 3, response: response }),
            }
        ).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log("Unable to send feedback due to ",error);
        });;

      setHidePopup(true);
    }, 2000);
  };

  return (
    <div>
      {flags.feedback_popup.enabled && (
        <div
          className="popup rounded-t-xl h-60 w-52 bg-zinc-700"
          hidden={hidePopup}
        >
          <IoIosArrowDown
            onClick={() => setHidePopup(true)}
            size="24px"
            className="absolute fill-white top-2 right-2 cursor-pointer"
          />

          <div className="star-feedback" hidden={hideStarFeedback}>
            <h2 className="p-8 text-white text-lg font-bold">
              How do you like the page?
            </h2>

            <div className="h-0.5 w-20 bg-yellow-600 relative left-5"></div>

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
          </div>

          <div className="thank-you" hidden={hideThankYou}>
            <h2 className="p-8 text-white text-lg font-bold">Thank You!</h2>
            <FaCheckCircle className="inline mt-5 h-20 w-20 text-blue-300" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
