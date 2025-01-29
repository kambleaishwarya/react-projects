import { useState } from "react";
function MyComponent(props){
const [clickCount, setClickCount] = useState(1)
const [decreCount, setDecreCount] = useState(0)

    function incrementCount() {
        setClickCount((y) => y + 1);

    }
    function decrementCount() {
        setDecreCount((x) => x -1);

    }


    return (
        <div>
    <h1>Happy Learning</h1>
    <p>{props.designation} count is {clickCount}</p>
    <button onClick={incrementCount}> Click Me to increment count!</button>
    <p>{props.designation} count is {decreCount}</p>
    <button onClick={decrementCount}>Click Me to decrement count</button>
    </div>
    )
}

export default MyComponent;