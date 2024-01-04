const FreeText = ({handleSubmit}) => {

  const handleInput = (event) => {
    handleSubmit("hello")
    event.preventDefault();
  }

  return (
    <form onSubmit={handleInput}>
      <input 
        name="message"
        className="rounded mt-5 h-70 p-1 placeholder:italic placeholder:text-slate-400" 
        placeholder="Type anything...">
      </input>

      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" 
        type="submit">
          Submit
      </button>
    </form>
  )}

export default FreeText;