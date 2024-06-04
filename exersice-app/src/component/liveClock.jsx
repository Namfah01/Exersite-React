import React, { useState, useEffect} from 'react';

function LiveClock() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log("Clear up");
        }
    }, []);

    return(
        <div>
            <h1>{currentTime}</h1>
        </div>
    );
}

export default LiveClock;