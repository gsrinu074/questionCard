export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900">
        Welcome to 100 MCQ
      </h1>

      <p className="text-sm text-slate-1000 text-purple-600 font-semibold">
        Kaylie, if you are ready and have enough time to answer 100 questions,
        <br />
        press "I am ready" to begin.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="mt-2 rounded-lg bg-purple-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-purple-700"
      >
        I am ready
      </button>
    </div>
  );
}
