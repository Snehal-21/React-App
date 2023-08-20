const Props = () => {
    const handleClick = () => {
        alert("button clicked");
    };
    return <Child text="Click me" onClick={handleClick} />
}
const Child = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>
}


export default Props;