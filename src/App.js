import React from "react";
import logo from "./logo.svg";
import me from "./me.png";
import "./App.css";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
    return (
        <div className="app min-h-screen text-blue-200 flex items-center flex-col p-20">
            <div className="mb-10 grid grid-cols-4 grid-rows-2 w-1/2 mx-auto">
                <img className="opacity-25" src={logo} alt="React Logo" width="300"/>
                <img
                    className="col-span-2 row-span-3 animate-spin m-auto"
                    style={{animationDuration: "30s"}}
                    src={me}
                    alt="React Logo"
                    width="300"
                />
                <img className="opacity-25" src={logo} alt="React Logo" width="300"/>
                <img className="opacity-25" src={logo} alt="React Logo" width="300"/>
                <img className="opacity-25" src={logo} alt="React Logo" width="300"/>
            </div>

            <h1 className="text-2xl lg:text-5xl mb-10 text-right">
                Hi. I'm @mleach. {" "}
            </h1>
            <h2>
                This page is a placeholder. I may do something with it eventually, but no guarantees.
            </h2>
        </div>
    );
}

