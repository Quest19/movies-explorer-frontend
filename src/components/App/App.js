import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Regiter from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="page">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {" "}
                            <Header /> <Main /> <Footer />{" "}
                        </>
                    }
                />
                <Route
                    path="/movies"
                    element={
                        <>
                            {" "}
                            <Header /> <Movies /> <Footer />{" "}
                        </>
                    }
                />
                <Route
                    path="/saved-movies"
                    element={
                        <>
                            {" "}
                            <Header /> <SavedMovies /> <Footer />{" "}
                        </>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <>
                            {" "}
                            <Header /> <Profile />{" "}
                        </>
                    }
                />
                <Route path="/signup" element={<Regiter />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
