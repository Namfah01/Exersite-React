import { useState } from 'react'

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled((prevState) => !prevState);
    };

    return (
        <button onClick={handleToggle}
        className={`border rounded py-1 px-2 m-5 ${isToggled ? 'bg-green-500' : 'bg-red-500'} text-white`}
        >
            {isToggled ? 'On' : 'Off'}
        </button>
    );
};

export default ToggleButton;

//ถ้าแสดงผลเป็น true ให้แสดง on ผลเป็น flase ให้แสดง off