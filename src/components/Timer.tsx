import {useEffect, useState} from 'react'

const Timer = () => {
    const [time, setTime] = useState<number>(0);
    const [isActtive, setIsActive] = useState<boolean>(false);

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

  return (
    <>
        <h2>Timer</h2>
        <span>Elapse Time: {time}</span>
        <button onClick={() => { setIsActive(!isActtive); setTime(time + 1); }}> {!isActtive ? 'Start' : 'Pause'}</button>
        <button onClick={() => { setTime(0); }}>Reset</button>
    </>
  )
}

export default Timer