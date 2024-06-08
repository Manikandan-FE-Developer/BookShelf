import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

export default function Header({onSearch}) {

    return (
        <nav className="Navbar">
            <div className="col-12 col-md-3 text-center navLogo">
                <div className="navbar-brand">
                    <img src="images/logo.png" alt="logo"/>
                </div>
            </div>
            <div className="col-12 col-md-6 text-center navSearch">
                <Search onSearch={onSearch} />
            </div>
            <div className="col-12 col-md-3 text-center navBookshelf">
                <Link to="/bookshelf">
                    <button className="btn btn-success">My Bookshelf</button>
                </Link>
            </div>
        </nav>
    );
}