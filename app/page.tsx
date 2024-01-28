export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* title */}
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        MD Sadman Sakib
      </h1>

      {/* description */}
      <p className="mt-3 text-2xl text-center text-gray-300">
        with{" "}
        <a
          className="text-blue-400"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>
      </p>
    </div>
  );
}
