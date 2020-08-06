import React from "react";

import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    return (
        <header>
            <div className="container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg"
                    alt="marvel-logo"
                    onClick={() => {
                        history.push("/");
                    }}
                />
                <button
                    onClick={() => {
                        history.push(`/character`);
                    }}
                >
                    <span>Characters</span>
                </button>
                <button
                    onClick={() => {
                        history.push(`/comics`);
                    }}
                >
                    <span>Comics</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
