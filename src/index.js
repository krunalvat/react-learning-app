import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import UseContext from './components/UseContext';
import UserPrams from './components/UserPrams';
import Home from './components/Home';

import Name from "./components/Name";
/** Hard Coded */
import Form from './components/Form';
/** Little Hard Coded */
import FormSimple from './components/FormSimple';
import FormSimpleTwo from './components/FormSimpleTwo';
import User from './components/User';
import UserCard from './components/UserCard';
import Props from './components/Props';
import ToDoListToggle from './components/ToDoListToggle';
import ToDoList1 from './components/ToDoList1';
import UseStateExample from './components/UseStateExample';
import ImageGallery from './components/ImageGallery';
import Challenge from "./components/Challenge";
import ChallengeOne from './components/ChallengeOne';
import ChallengeTwo from './components/ChallengeTwo';
import ChallengeThree from './components/ChallengeThree';
import Search from './components/Search';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter basename="/" >
     {/* <App /> */}
     <Nav />
     <Routes>
     <Route  path='/' element={<Home />} />
      <Route  path='/challenge' element={<Challenge />} />
      <Route exact path='/challenge-one' element={<ChallengeOne />} />
      <Route exact path='/challenge-two' element={<ChallengeTwo />} />
      <Route exact path='/challenge-three' element={<ChallengeThree />} />
      <Route exact path='/image-gallery' element={<ImageGallery />} />
      <Route exact path='/use-state' element={<UseStateExample />} />
      <Route exact path='/todo-list' element={<ToDoList1 />} />
      <Route exact path='/todo-list-toggle' element={<ToDoListToggle />} />
      <Route exact path='/props' element={<Props name="test"/>} />
      <Route exact path='/user-props' element={ User.map((val) => {
            return (
                <>
                    < UserCard key = {val.id} name= {val.name} username ={ val.username } email = { val.email } image= { val.imagePath } />
                </>
            )
        })} />
      <Route exact path='/form' element={<Form/>} />
      <Route exact path='/form-two' element={<FormSimple/>} />
      <Route exact path='/form-three' element={<FormSimpleTwo/>} />
      <Route exact path='/name' element={<Name/>} />
      <Route exact path='/user-context' element={<UseContext/>} />
      <Route exact path='/user-params/:name/:id' element={<UserPrams/>} />
      <Route exact path='/search' element={<Search/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
