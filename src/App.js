import React, { useState } from "react";
import "./styles.css"

const emojiDB = {
    "🏤": "Post Office",
    "🏬": "Department Store",
    "🏠": "House",
    "🏦": "Bank",
    "🏝️": "Desert Island"
}

var emojiList = Object.keys(emojiDB);

function App() {
    const [meaning, setMeaning] = useState("");

    function onEmojiClick(emoji) {
        setMeaning(emojiDB[emoji]);
        console.log("meaning...", emojiDB[emoji])
        console.log(emoji)
    }

    function emojiInputHandler(event) {
        var userInput = event.target.value;

        var meaning = emojiDB[userInput];

        if (meaning === undefined) {
            meaning = "we don't have this in our database";
        }
        setMeaning(meaning);
    }

    return (
        <div >
            <h1>Know your emoji</h1>

            <h3>Paste the emoji below</h3>

            <div style={{ marginBottom: "3rem", marginTop: "3rem" }} >
                <input size="50" style={{ height: "2rem" }} onChange={emojiInputHandler} />
            </div>

            <h2>{meaning}</h2>

            {
                emojiList.map(emoji => {
                    return <span onClick={() => onEmojiClick(emoji)} key={emoji} style={{ cursor: "pointer", fontSize: "2rem", padding: "2rem" }} >
                        {emoji}
                    </span>
                })
            }

            <ul class="footer-list">
                <li class="list-item"><a target="_blank" rel="noreferrer" href="mailto:chakravarthisaran7@gmail.com" class="footer-links">
                    <i class="fa fa-envelope" aria-hidden="true"></i></a>
                </li>
                <li class="list-item"><a target="_blank" rel="noreferrer" href="https://github.com/chakravarthi0">
                    <i class="fab fa-github" aria-hidden="true"></i>
                </a>
                </li>
                <li class="list-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/saran-chakravarthi-b44438175">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                </li>
                <li class="list-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/saranchakravar3">
                    <i class="fab fa-twitter"></i>
                </a>
                </li>
                <li class="list-item"><a target="_blank" rel="noreferrer" href="https://portfolio-saran.netlify.app/">
                    <i class="fas fa-briefcase"></i>
                </a>
                </li>

            </ul>
        </div>
    )
}

export default App;