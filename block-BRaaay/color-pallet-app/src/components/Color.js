import Colorbox from "./Colorbox";

function Color( { keyValue, value } ){
    return  <>
            <div>
                <h1>{keyValue.charAt(0).toUpperCase()+keyValue.slice(1)}</h1>
                <p>colors.{keyValue}</p>
            </div>
            <div className="wrap">
                <Colorbox value={value} />
            </div> 
        </>
}

export default Color;