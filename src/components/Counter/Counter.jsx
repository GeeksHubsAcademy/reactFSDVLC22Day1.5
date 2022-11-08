
//useState es el metodo que nos permitirá usar hooks en componentes funcionales
import React, {useState} from 'react';

//Importo su css
import './Counter.css';

const Counter = ({frequency}) => {

    //Genero el estado...en este caso serán HOOKS.

    const [value, setValue] = useState(0);

    //Funciones ...

    const operate = (operation) => {

        if(operation === "sum"){
            setValue(value + frequency);
        }else{
            setValue(value - frequency);
        };

    }

    return(
        <div className="counterDesign">
            <div onClick={()=>operate("sum")}>+</div>
            <div>{value}</div>
            <div onClick={()=>operate("rest")}>-</div>
        </div>
    )

}

export default Counter;