import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 text-center">

      {/* 404 Big Text */}
      <h1 className="text-[120px] sm:text-[160px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-indigo-950 select-none">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-2 mb-3">
        Page Not Found
      </h2>
      <p className="text-slate-400 text-base sm:text-lg max-w-md leading-relaxed mb-10">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Go Home Button */}
      <button
        onClick={() => navigate('/')}
        className="bg-indigo-950 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-slate-800 transition"
      >
        ← Go Back Home
      </button>

    </div>
  );
}