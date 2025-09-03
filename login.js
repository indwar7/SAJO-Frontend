import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
                <h1 className="text-3xl font-bold text-green-700 mb-6">
                    Sajo
                </h1>
                <nav className="mb-6">
                    <Link to="/login" className="mx-2 text-blue-600">Login</Link>
                    <Link to="/signup" className="mx-2 text-blue-600">Signup</Link>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

