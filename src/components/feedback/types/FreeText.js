const FreeText = () => {
    return (
        <>
            <textarea className="rounded mt-5 h-70 p-1 placeholder:italic placeholder:text-slate-400" placeholder="Type anything..."></textarea>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Submit</button>
        </>
    )}

export default FreeText;