import React, { useState } from "react";
import questions from "./Component/Data/Data";
import "./App.css";

const App = () => {
  const [currentQuestion, SetCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore((currScore) => currScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      SetCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restart = () => {
    SetCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-container'>
          <div className='score-sectoin'>
            You Scored {score} out of {questions.length}
          </div>
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question{currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
            <div>
              {questions[currentQuestion].answerOptions.map(
                (anwerOption, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() =>
                        handleAnswerOptionClick(anwerOption.isCorrect)
                      }>
                      {anwerOption.answerText}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
