import React from 'react';
import { QuestionForm } from './QuestionForm';
import { Questions } from './Questions';



export const App = () => {

    const [questions, setQuestions] = useState([
        { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
        { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?' },
        { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?' },
        ]);

        const submitQuestion = question => {
            setQuestions([...questions, question]);
        };
      
        const deleteQuestion = _id => {
           setQuestions(questions.filter(question => question._id !== _id));
        };



    // The primary benefit of React is its ability to return HTML elements from JS functions, abstracting away the likes of `document.append()`.
    return (
        <div className="App">
          <header>RecApp2.0</header>
          <QuestionForm 
            submitQuestion={submitQuestion}
          />
          <Questions 
            deleteQuestion={deleteQuestion}
            questions={questions}
          />
        </div>
      );
};