// import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import StarRating from "./types/StarRating";

const Popup = ({title, type}) => {
    const apiUrl = "https://zgxbj5zic1.execute-api.us-east-1.amazonaws.com/dev/"
    // const [hidePopup, setHidePopup] = useState(false);

    // const handleSubmit = (response) => {
    //   fetch(apiUrl,
    //       {
    //           method: "POST",
    //           mode: "cors",
    //           headers: { "Content-Type": "application/json" },
    //           body: JSON.stringify({ questionId: 3, response: response }),
    //       }
    //   ).then((response) => {
    //       console.log(response);
    //   }).catch((error) => {
    //       console.log("Unable to send feedback due to ",error);
    //   });;

    // //   setTimeout(() => {
    // //     setHidePopup(true);
    // //   }, 2000);
    // };


    return (
      <div
        className="popup rounded-t-xl h-60 w-52 bg-zinc-700"
        // hidden={hidePopup}
      >
        <IoIosArrowDown
          onClick={() => console.log("hide popup")}
          size="24px"
          className="absolute fill-white top-2 right-2 cursor-pointer"
        />

        <div>
          <h2 className="p-8 text-white text-lg font-bold">
            {title}
          </h2>

          <div className="h-0.5 w-20 bg-yellow-600 relative left-5"></div>
          
          <StarRating handleSubmit={console.log("submitted")} />

        </div>
      </div>
    )
}

export default Popup