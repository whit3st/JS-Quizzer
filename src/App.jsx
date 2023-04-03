import { useEffect, useState } from "react"
import Question from "./Question"
export default function App() {
const [questions, setQuestions] = useState([])
const [ready, setReady] = useState(false)
const [currentQuestion, setCurrentQuestion] = useState(0)

useEffect(() => {
  fetch('./questions.json')
  .then(res => res.json())
  .then(data => setQuestions(data))
}, [])


  return (
    <div className="flex flex-col sm:px-10 px-3 py-5 gap-5 max-w-[600px]">
      {!ready && <main>
        <header className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-bold text-3xl self-center text-center">
            Welcome. Let's test your knowledge.
          </h1>
          <button onClick={() => setReady(true)} className="btn btn-primary w-48 text-xl">
        Begin
      </button>
        </header>
      </main>}
      {ready && (
        <main className="flex flex-col gap-10">
          <header>
            <h1 className="uppercase font-bold text-3xl self-center text-center">
              Questions
            </h1>
          </header>

          {ready && <Question questions={questions} />}
        </main>
      )}
    </div>
  );
}