import {useEffect, useRef, useState} from 'react'

const Timer = () => {
    const [time, setTime] = useState<number>(0);
    const [isActtive, setIsActive] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // If provided empty array, then the effect will only run once when the component mounts
    useEffect(() => {
        console.log('Mounting...');
        let timerID: any;

        if (isActtive) {
            timerID = setInterval(() => {
                setTime(time + 1);
            }, 1000);
        } else if (!isActtive && time !== 0) {
            clearInterval(timerID);
        }

        return () => {
            console.log('Unmounting...');
            if (timerID) {
                clearInterval(timerID);
            }
        }
    }, [time, isActtive]);

    // Whenever we mounting the component, we want to focus on the input field. 
    // We can achieve this by using the useRef hook to create a reference to the input element and then 
    // calling the focus method on it inside a useEffect hook that runs when the component mounts.
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.placeholder = 'Mounted';
            inputRef.current.focus();
        }
    }, []);

  return (
    <>
        <h2>Timer</h2>
        <input ref={inputRef} placeholder='Input' />
        <span>Elapse Time: {time}</span>
        <button onClick={() => { setIsActive(!isActtive); setTime(time + 1); }}> {!isActtive ? 'Start' : 'Pause'}</button>
        <button onClick={() => { setTime(0); }}>Reset</button>
    </>
  )
}

export default Timer