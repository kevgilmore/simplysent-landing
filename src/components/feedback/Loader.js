import "./style.css";
import { useState, useEffect, useRef } from "react";
import { useFlags } from "flagsmith/react";
import { useSelector } from "react-redux";

import Popup from "./Popup";

const Loader = () => {
  const apiUrl = "https://zgxbj5zic1.execute-api.us-east-1.amazonaws.com/dev/"
  const controllerRef = useRef();
  const count = useSelector((state) => state.counter.value)

  const flags = useFlags(["feedback_popup"]);
  const [loading, setLoading] = useState(true);
  const [questionId, setQuestionId] = useState();
  const [questionTitle, setQuestionTitle] = useState("Loading...");
  const [questionType, setQuestionType] = useState("Loading...");

  useEffect(() => {
    console.log("count=", count)

    if (controllerRef.current) {
      controllerRef.current.abort()
    }
    controllerRef.current = new AbortController()
    const signal = controllerRef.current.signal
    fetch(apiUrl, {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      signal: signal
    })
      .then(response => response.json())
      .then(data => {
        console.log("fetching questions...")
        const question = data.questions[0]
        if (question.type != null) {
          setQuestionId(question.id)
          setQuestionTitle(question.text)
          setQuestionType(question.type)
          setLoading(false)
        }
      }).catch((error) => {

        console.log("error fetching questions due to ", error)
      });
  });

  return (
    <div>
      {flags.feedback_popup.enabled && !loading && (
        <Popup id={questionId} title={questionTitle} type={questionType} />
      )}
    </div>
  )
};

export default Loader;
