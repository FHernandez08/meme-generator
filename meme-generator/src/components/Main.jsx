import { useState } from "react";

export default function Main() {

    const [Meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const { value } = event.currentTarget
        
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={Meme.imageUrl}/>
                <span className="top">{Meme.topText}</span>
                <span className="bottom">{Meme.bottomText}</span>
            </div>
        </main>
    )
}