import './App.css'

function App() {

  return (
    <div className="bg-fill min-h-screen flex items-center justify-center">
      <div className="w-[60%] m-auto">
        <h1 className="text-3xl text-heading my-4 font-bold">Theme selector</h1>
        <p className="text-red-600">Hi there</p>
        <p className="text-red-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
          tenetur. Unde praesentium minus dolore sapiente in non natus,
          asperiores pariatur!
        </p>
        <button className="mt-4 bg-primary text-white p-2 px-3 mx-1 rounded-md">
          Get Started
        </button>
        <button className="mt-4 border-primary border p-2 px-3 mx-1 rounded-md">
          Installation
        </button>
      </div>{" "}
    </div>
  );
}

export default App
