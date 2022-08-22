function Colorbox( {value} ) {
 
    const weigth = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, "a100", "a200", "a400", "a700" ]
    // eslint-disable-next-line no-lone-blocks
    return <>
    {
        value.map((el,i)=>{
            const style = { backgroundColor: el }
            console.log(style)
            return <div className="wrap1">
            <div>
                <div className="box" style={{ backgroundColor: el }} > </div>
            </div>
            <div className="column">
                <p> { weigth[i] } </p>
                <h2> {el.split("").map(e=>e.toUpperCase()).join("")} </h2>
            </div>
        </div>
        })
    }
    </>
    
}

export default Colorbox;