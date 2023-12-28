import { FaCheckCircle } from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className="thank-you">
        <h2 className="p-8 text-white text-lg font-bold">Thank You!</h2>
        <FaCheckCircle className="inline mt-5 h-20 w-20 text-blue-300" />
    </div>
  );
};

export default ThankYou;