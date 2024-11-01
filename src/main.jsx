// Import necessary libraries and components for the application
import { StrictMode } from 'react'         // React component for highlighting potential problems in the application
import { createRoot } from 'react-dom/client' // React DOM function to create the root of the application
import './index.css'                       // Import global CSS styles for the application
import App from './App.jsx'                 // Main App component of the application
import { Provider } from 'react-redux'      // Provider component to connect the React application to Redux
import store from './store.js'              // Redux store configuration for state management

// Create the root of the application by targeting the 'root' element in the HTML
createRoot(document.getElementById('root')).render(
  <StrictMode>                              {/* Enable strict mode to help identify potential issues */}
    <Provider store={store}>                {/* Connect Redux store to the React application */}
      <App />                               {/* Render the main App component */}
    </Provider>
  </StrictMode>,
)
