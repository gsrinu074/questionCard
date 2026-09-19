import { useState } from 'react'
import QuestionCard from './QuestionCard'
import WelcomeScreen from './WelcomeScreen'
import { questions } from './questions'

function App() {
  const [started, setStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const current = questions[index]

  if (!started) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-purple-600 px-4 py-10">
        <WelcomeScreen onStart={() => setStarted(true)} />
      </div>
    )
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-purple-600 px-4 py-10">
      <p className="text-sm font-medium text-white">
        Question {index + 1} of {questions.length}
      </p>

      <QuestionCard
        key={index}
        question={current.question}
        options={current.options}
        answer={current.answer}
        explanation={current.explanation}
      />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
          className="rounded-lg border border-white/60 px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => i + 1)}
          disabled={index === questions.length - 1}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
