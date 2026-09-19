import { useState } from 'react'

function optionClasses(index, selected, correctIndex) {
  const base =
    'w-full text-left px-4 py-3 rounded-lg border transition-colors cursor-pointer'

  if (selected === null) {
    return `${base} border-slate-200 hover:border-purple-400 hover:bg-purple-50`
  }

  if (index === correctIndex) {
    return `${base} border-green-500 bg-green-50 text-green-800`
  }

  if (index === selected) {
    return `${base} border-red-500 bg-red-50 text-red-800`
  }

  return `${base} border-slate-200 opacity-60`
}

export default function QuestionCard({ question, options, answer, explanation }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-900">{question}</h2>

      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(index)}
            className={optionClasses(index, selected, answer)}
          >
            {option}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="mt-4">
          <p
            className={`text-sm font-medium ${
              selected === answer ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {selected === answer ? 'Correct!' : 'Incorrect.'}
          </p>
          {explanation && <p className="mt-1 text-sm text-slate-500">{explanation}</p>}
        </div>
      )}
    </div>
  )
}
