function handleClick() {
    alert(`Hello React Event`);
}

function Names(){
    return(
         ['Arya', 'John', 'Bran'].map(name=>{
           return  <Name key={name} info={name}/>
         })
    );
}

function helpClick() {
    alert('To learn React use https://reactjs.org');
    alert('React and ReactDOM works together');
    alert('Babel helps in writing JSX');
}

function Main() {
    return (
        <>
        <main className = "main">
            <div className = 'box1'>
                <button onClick = {handleClick} className ="btn">click Me</button>
                <button onClick = {helpClick} className ="btn">How can I help you?</button>
            </div>
            <div className = 'box2'>
                <button onClick = {nameClick} className ="btn-2">Arya</button>
                <button onClick = {nameClick} className ="btn-2">John</button>
                <button onClick = {nameClick} className ="btn-2">Bran</button>
            </div>
        </main>
        </>
    )
}

export default Main;