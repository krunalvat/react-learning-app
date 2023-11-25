import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import ChallengeOne from './ChallengeOne';
import ChallengeTwo from './ChallengeTwo';
import ImageGallery from './ImageGallery';
import {addition, subtraction, multiplication, division} from './Calculator';
import User from './User';
import UserCard from './UserCard';
import Props from './Props';
import ChallengeThree from './ChallengeThree';
import UseStateExample from './UseStateExample';

/** Hard Coded */
import Form from './Form';

/** Little Hard Coded */
import FormSimple from './FormSimple';

import FormSimpleTwo from './FormSimpleTwo';

import ToDoList from './ToDoList';

import ImportExport,{ FavDish, YourName, YourAge } from './ImportExport'; // Lern Import Export Features
// import * as Import from './ImportExport'; // Lern Import Export Features Second Example

import Name from "./Name";

import ToDoListToggle from './ToDoListToggle';

import UseContext from './UseContext';

// import App from './App';
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(<h1>Hello</h1>,document.getElementById('root')); //single render jsx

ReactDOM.render(<> < Name /> </>,document.getElementById('krunal'));

ReactDOM.render(< App />,document.getElementById('root'));

// Challenage Number 1
ReactDOM.render(<> < ChallengeOne /></>,document.getElementById('challenge'));

//Challenge 2 
ReactDOM.render(<> < ChallengeTwo /> </>,document.getElementById('challenge-second'));

// challeange 3
ReactDOM.render( <> < ChallengeThree /> </>, document.getElementById('challenge-three'));

// using inline css to to element

ReactDOM.render(
    <>
    <h1 style={{ backgroundColor :"red", textAlign : "center", fontSize : "large"}}>Image Gallery Inline Css</h1>
    </>,document.getElementById('image-gallery-inline'));

//Import Export Features
ReactDOM.render(<> 
    <h1>{`Fav Color is:- ${ImportExport} `}</h1> 
    <h2>  {`Fav Dish  is:- ${FavDish} `} </h2>
    <h3>  {`Your Name  is:- ${YourName()} `} </h3>
    <h4>  {`Your Age  is:- ${YourAge()} `} </h4>
    </>,document.getElementById('import-export'));


//Import Export Features Second Example

// ReactDOM.render(<> 
//     <h1>{`Fav Color is:- ${ Import.default} `}</h1> 
//     <h2>  {`Fav Dish  is:- ${Import.FavDish} `} </h2>
//     <h3>  {`Your Name  is:- ${ Import. YourName()} `} </h3>
//     <h4>  {`Your Age  is:- ${ Import. YourAge()} `} </h4>
//     </>,document.getElementById('import-export'));


// Image Gallery
ReactDOM.render(<> < ImageGallery /> </>,document.getElementById('image-gallery'));

ReactDOM.render(
<> 
 { `Sum Of Number is:  ${addition(40,4)}  `}
 { `Subtraction Of Number is:  ${subtraction(40,4)} `}
 { `Multiplication Of Number is:  ${multiplication(40,4)} `}
 { `Division Of Number is:  ${division(40,3)} `}

</>,document.getElementById('calculator-data'));

ReactDOM.render(
    <>
    < Props name="Hello"/>
    </>,document.getElementById('props-data')
);



ReactDOM.render( <> 
<div className="container">
    <div className="row">
        
        { User.map((val) => {
            return (
                <>
                    < UserCard key = {val.id} name= {val.name} username ={ val.username } email = { val.email } image= { val.image } />
                </>
            )
        })}
    </div>
</div>
</>,document.getElementById('user-props-data'));

ReactDOM.render([
    <h1>Hello</h1>,
    <p>this is paragraph tag</p>,
    ],
    document.getElementById('root')
    ); //single render jsx

ReactDOM.render(
    <>
    <h1>Learn useState</h1>
    < UseStateExample/>
    </>,document.getElementById('use-state-example')
);

ReactDOM.render(
    <>
    <Form />
    </>,document.getElementById('react-form-render')
);


ReactDOM.render(
    <>
    <FormSimple />
    </>,document.getElementById('react-simple-form-render')
);

ReactDOM.render(
    <>
    <FormSimpleTwo />
    </>,document.getElementById('react-simple-two-form-render')
);


ReactDOM.render(
    <>
    <ToDoList />
    </>,document.getElementById('todo-list-render')
);

ReactDOM.render(
    <>
    <ToDoListToggle />
    </>,document.getElementById('todo-list-api-render')
);


ReactDOM.render(
    <>
    <UseContext />
    </>,document.getElementById('context-api-render')
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
