
//Soy un componente funcional

import React from 'react';
import Counter from '../../components/Counter/Counter';

//Importo la parte CSS
import './Home.css';

const Home = (props) => {


    //Todo componente tiene que tener un return y dentro un nodo padre
    return(
        <div>soy el Home de {props.name}
        
        <Counter frequency={5}/>
        <Counter frequency={1}/>
        <Counter frequency={10}/>
        
        </div>
    )
}

export default Home;