import React from 'react';
import ReactDOM from 'react-dom/client';
import style from "../styles/style.scss"
const root = ReactDOM.createRoot(document.getElementById('root'))
const Header = () => {
    return <h2>Hello, World!</h2>
}
root.render(<Header/>)