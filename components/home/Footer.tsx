export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h3 className="text-xl font-bold text-blue-500">
          InterviewX
        </h3>

        <p className="text-gray-500 mt-4 md:mt-0">
          © {new Date().getFullYear()} InterviewX. All rights reserved.
        </p>

      </div>
    </footer>
  );
}