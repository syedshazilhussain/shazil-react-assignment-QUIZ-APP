import './App.css';
import { useState } from 'react';
import logo from 'react'

function App() {
  const [quizAppArray, setQuizApp] = useState([
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
  ]);
  let [arrIndexNum, setArrIndexNum] = useState(0);
  let [quizMarks, setQuizMarks] = useState(0);
  let [quizResult, setQuizResult] = useState(false);
  const checkOption = (selected, correckOption) => {
    if(selected == correckOption){
          setQuizMarks(quizMarks + 1)
    }
    if(arrIndexNum + 1 == quizAppArray.length) {
      setQuizResult(true);
    }
    setArrIndexNum(arrIndexNum + 1);
  }
        return (
      <div className="App">
      <div className='App-cover'>
      <header>
        <div>
          <h1 className='quizHeading'>QUIZ APP</h1>
        </div>
        {quizResult ?(<h1 className='quizMarks'>YOUR MARKS IS {quizMarks}</h1>) : (
          <div>
        <h1 className='quizQuestions'>{quizAppArray[arrIndexNum].question}</h1>
        <div class="geeks"></div>
        <div className='div1'>
          {quizAppArray[arrIndexNum].options.map((option, key) => {
            return (
              <div className='div2' key={key}>
              <button className='quizOption' onClick={() => checkOption(option, quizAppArray[arrIndexNum].answer)}>{option}</button>
            </div>
           )
          })}
        </div>
          </div>
        ) }
      </header>
    </div>
      </div>
  );
}

export default App;
