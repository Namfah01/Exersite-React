import React, { useState, useEffect} from 'react';

const Greeting = () => {
    const [greeting, setGreeting] = useState('');

    const getGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return 'Good Morning';
        } else if (currentHour < 18) {
            return  'Good Afternoon';
        } else {
            return  'Good Evening';
        }
    };

    useEffect (() => {
        const greentingMessage = getGreeting() ;
        setGreeting(greentingMessage);
    }, []);

    return (
        <div className={`greeting ${greeting.includes('Morning') ? 'morning': greeting.includes('Afternoon') ? 'afternoon': 'evening'}`}>
            <h1>{greeting}</h1>
        </div>
    );
};

export default Greeting;