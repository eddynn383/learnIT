import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseProvider } from "./context/FirebaseContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import './assets/design/reset.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <FirebaseProvider>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </FirebaseProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
