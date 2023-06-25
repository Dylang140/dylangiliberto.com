import ulvweatherphoto from '../image/ulvweather.png';
import mb from '../image/mb.png';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";

export default function Projects(){
    return (
        <div className='page'>
            <Link to='/projects/weather' className='blobLink'>
                <div className='blob' style={{backgroundImage : `url(${ulvweatherphoto})`}}>
                    <h1><u>ULV Weather Project</u></h1>
                    <h2>A full-stack weather station project</h2>
                    <h3><i>Python, HTML/CSS, JavaScript, SQL, APIs</i></h3>
                </div>
            </Link>
            <br/>
            <Link to='/projects/messageboard' className='blobLink'>
                <div className='blob' style={{backgroundImage : `url(${mb})`}}>
                    <h1><u>Message Board Site</u></h1>
                    <h2>Session-Based User Authernitcation</h2>
                    <h2>MySQL Database, JavaScript Backend API</h2>
                    <h3><i>HTML/CSS, JavaScript, SQL, APIs, React, NodeJS</i></h3>
                </div>
            </Link>
        </div>
    );
}