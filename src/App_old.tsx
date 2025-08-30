import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'  // stays .jsx if you're not moving to TypeScript
import './index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root')!
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)