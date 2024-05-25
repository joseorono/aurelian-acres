export default function TailwindDemo() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-center text-4xl font-bold text-gray-900">Welcome to Tailwind Demo!</h1>
        <p className="text-center text-lg text-gray-700">
          This is a simple demo to show how to use Tailwind CSS in your project.
        </p>
        <div className="mt-8">
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Learn Tailwind CSS
          </a>
        </div>
      </div>

      <div className="rounded-md bg-white p-4 shadow-md">White</div>
      <div className="rounded-md bg-red-500 p-4 text-white shadow-md">Red</div>
      <div className="bg-gold-500 rounded-md p-4 text-white shadow-md">Gold</div>
      <div className="rounded-md bg-yellow-500 p-4 text-black shadow-md">Yellow</div>
      <div className="bg-brown-500 rounded-md p-4 text-white shadow-md">Brown</div>
      <div className="bg-scroll-500 rounded-md p-4 text-white shadow-md">Scroll</div>
      <div className="rounded-md bg-slate-500 p-4 text-white shadow-md">Slate</div>
      <div className="rounded-md bg-gray-500 p-4 text-white shadow-md">Gray</div>

      <div className="rounded-md bg-gray-800 p-4 text-white shadow-md">White Text</div>
      <div className="rounded-md bg-gray-200 p-4 text-red-500 shadow-md">Red Text</div>
      <div className="text-gold-500 rounded-md bg-gray-200 p-4 shadow-md">Gold Text</div>
      <div className="rounded-md bg-gray-200 p-4 text-yellow-500 shadow-md">Yellow Text</div>
      <div className="text-brown-500 rounded-md bg-gray-200 p-4 shadow-md">Brown Text</div>
      <div className="text-scroll-500 rounded-md bg-gray-200 p-4 shadow-md">Scroll Text</div>
      <div className="rounded-md bg-gray-200 p-4 text-slate-500 shadow-md">Slate Text</div>
      <div className="rounded-md bg-gray-200 p-4 text-gray-500 shadow-md">Gray Text</div>

      <div className="rounded-md border border-red-500 p-4 shadow-md">Red Border</div>
      <div className="border-gold-500 rounded-md border p-4 shadow-md">Gold Border</div>
      <div className="rounded-md border border-yellow-500 p-4 shadow-md">Yellow Border</div>
      <div className="border-brown-500 rounded-md border p-4 shadow-md">Brown Border</div>
      <div className="border-scroll-500 rounded-md border p-4 shadow-md">Scroll Border</div>
      <div className="rounded-md border border-slate-500 p-4 shadow-md">Slate Border</div>
      <div className="rounded-md border border-gray-500 p-4 shadow-md">Gray Border</div>

      <div className="rounded-md p-4 shadow-md ring ring-red-500 ring-offset-2">Red Ring</div>
      <div className="ring-gold-500 rounded-md p-4 shadow-md ring ring-offset-2">Gold Ring</div>
      <div className="rounded-md p-4 shadow-md ring ring-yellow-500 ring-offset-2">Yellow Ring</div>
      <div className="ring-brown-500 rounded-md p-4 shadow-md ring ring-offset-2">Brown Ring</div>
      <div className="ring-scroll-500 rounded-md p-4 shadow-md ring ring-offset-2">Scroll Ring</div>
      <div className="rounded-md p-4 shadow-md ring ring-slate-500 ring-offset-2">Slate Ring</div>
      <div className="rounded-md p-4 shadow-md ring ring-gray-500 ring-offset-2">Gray Ring</div>
    </>
  );
}
