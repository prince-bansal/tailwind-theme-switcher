import { useState } from "react";
import "./App.css";

const getClass = (color: string) => `bg-${color}-500`;

function App() {
  const [theme, setTheme] = useState("red");

  return (
    <div
      className={`theme-${theme} bg-fill min-h-screen flex items-center justify-center`}
    >
      <div className="w-[60%] m-auto">
        <div className="flex">
          {["red", 'purple',"blue", "green"].map((color) => (
            <div
              onClick={() => {
                console.log("color changes", color);
                setTheme(color);
              }}
              className={`cursor-pointer h-10 rounded-full w-10 ${getClass(
                color
              )} mx-1`}
            >
              p
            </div>
          ))}
        </div>
        <h1 className="text-3xl text-heading my-4 font-bold">Theme selector</h1>
        <p className="text-heading">
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

export default App;
