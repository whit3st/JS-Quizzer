import React, { useState } from "react";

export default function Question({ questions }) {
  const btnDefault = "btn btn-primary";
  const btnSuccess = "btn btn-success";
  const btnError = "btn btn-error";
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
    const options = document.querySelectorAll("#option");
  function answerHandler(e) {
    if (e.target.innerText.toLowerCase() == questions[currentQuestion].answer.toLowerCase()) {
      e.target.classList = btnSuccess;
      setIsCorrect(true);
    } else {
      e.target.classList = btnError;
    }
  }

  function nextQuestion() {
    setCurrentQuestion(currentQuestion + 1);
    setIsCorrect(false);
    options.forEach((option) => {
        option.className = btnDefault
    })
  }
  function previousQuestion() {
    setCurrentQuestion(currentQuestion - 1);
    setIsCorrect(false);
    options.forEach((option) => {
        option.className = btnDefault;
      })
  }

  return (
    <div className="flex flex-col px-5 py-8 rounded-lg h-[500px] max-w-[600px] shadow-md gap-5 relative bg-gradient-to-b from-gray-700 to-gray-900">
      <h1 className="font-semibold text-lg sm:text-xl mb-10">
        {questions[currentQuestion].question}
      </h1>
      <span
        onClick={(e) => answerHandler(e)}
        className="grid sm:grid-cols-4 grid-cols-2 gap-3 sm:justify-around"
      >
        {questions[currentQuestion].options.map((option, index) => (
          <button id="option" key={index} className={btnDefault}>
            {option}
          </button>
        ))}
      </span>
      {isCorrect && (
        <p className="font-semibold">
          Correct! Why? Because {questions[currentQuestion].description}
        </p>
      )}
      <span className="grid grid-cols-2 items-center gap-3 absolute bottom-5 left-3 right-3">
        <button
          onClick={() => previousQuestion()}
          className="btn btn-secondary"
        >
          PREVIOUS QUESTION
        </button>
        <p className="text-lg font-semibold text-center col-span-full row-start-2 row-end-2 row-span-full">
          {currentQuestion + 1}. Question
        </p>
        <button onClick={() => nextQuestion()} className="btn btn-secondary">
          NEXT QUESTION
        </button>
      </span>
    </div>
  );
}
