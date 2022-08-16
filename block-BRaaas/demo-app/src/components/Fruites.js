import fruits from '../data/data.js';
import Fruit from './Fruit';

function Fruits(){
    return(
         fruits.map(fruit=>{
           return  <Fruit key={fruit.id} fruitInfo={fruit}/>
         })
    );
}

export default Fruits;