export default function Button(){
    const myVariable = 1000;
    return (
        <button className="counter" onClick={() => alert("You clicked the button!")}>
            Press me {myVariable};
        </button>
    )
}