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

            <div style={{marginBottom:"3rem", marginTop:"3rem" }} >
                <input size="50" style={{height:"2rem"}} onChange={emojiInputHandler} />
            </div>

            <h2>{meaning}</h2>

            {
                emojiList.map(emoji => {
                    return <span onClick={() => onEmojiClick(emoji)} key={emoji} style={{ cursor: "pointer", fontSize: "2rem", padding: "2rem" }} >
                        {emoji}
                    </span>
                })
            }
        </div>
    )
}

export default App;