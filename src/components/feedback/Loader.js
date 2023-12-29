import "./style.css";
import { useState, useEffect, useRef } from "react";
import { useFlags } from "flagsmith/react";

import Popup from "./Popup";

const Loader = () => {
  const apiUrl = "https://zgxbj5zic1.execute-api.us-east-1.amazonaws.com/dev/"
  const controllerRef = useRef();

  const flags = useFlags(["feedback_popup"]);
  const [loading, setLoading] = useState(true);
  const [questionTitle, setQuestionTitle] = useState("Loading...");
  const [questionType, setQuestionType] = useState("Loading...");

  useEffect(() => {
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
        const question = data.questions[1]
        if (question.type != null) {
          setQuestionTitle(question.text)
          setQuestionType(question.type)
          setLoading(false)
        }
      }).catch((error) => {
          console.log("Unable to fetch question due to ", error);
      });
  });

  return (
      <div>
        { flags.feedback_popup.enabled && !loading && (
          <Popup title={questionTitle} type={questionType} />
        )}
      </div>
  )
};

export default Loader;
