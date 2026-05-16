import React, { useEffect, useState } from "react";

function App() {

    const [message, setMessage] = useState("");

    useEffect(() => {

        fetch("http://localhost:3000/message")
            .then(res => res.json())
            .then(data => setMessage(data.text));

    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;