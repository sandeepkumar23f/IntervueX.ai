export default function Navbar() {
  return (
    <nav className="w-full bg-blue-800 md:px-28 px-6 h-20 flex items-center justify-between">
      <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
        InterveuX.ai
      </div>

      <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
        Sign In
      </button>
    </nav>
  );
}