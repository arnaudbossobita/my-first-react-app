export default function Button(props: any){
    const myVariable = 1000;
    console.log(props);
    return (
        <button className="counter" onClick={() => alert("You clicked the button!")}>
            Press me {props.title} {myVariable};
        </button>
    )
}