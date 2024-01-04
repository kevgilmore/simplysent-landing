import { useRef } from 'react';

const FreeText = ({ handleSubmit }) => {

  const messageRef = useRef();

  const handleInput = (event) => {
    handleSubmit(messageRef.current.value)
    event.preventDefault();
  }

  return (
    <form onSubmit={handleInput}>
      <textarea
        ref={messageRef}
        className="rounded mt-5 h-70 p-1 placeholder:italic placeholder:text-slate-400"
        placeholder="Type anything...">
      </textarea>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mb-2 px-3 rounded"
        type="submit">
        Submit
      </button>
    </form>
  )
}

export default FreeText;
