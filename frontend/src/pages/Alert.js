export default function Alert({ message, onClose }) {
  return (
    message && (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-cyan-500 text-white p-8 rounded-md shadow-2xl flex flex-col items-center gap-6 w-[400px] max-w-full">
          <span className="text-lg font-semibold tracking-wide font-sans text-center">
            {message}
          </span>
          <button
            onClick={onClose}
            className="bg-white text-cyan-600 px-5 py-2 rounded-sm font-medium hover:bg-cyan-200 transition tracking-wide"
          >
            Fechar
          </button>
        </div>
      </div>
    )
  );
}
