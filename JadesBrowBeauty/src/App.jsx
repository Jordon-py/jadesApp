import React from 'react'; // Import React if not already done

// Import Components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home'; //
import Services from './components/Services/Services'; //
import Footer from './components/Footer/Footer'; //

// Import CSS
import './App.css'; // - Contains #root and .main-content styles

function App() {
  // Remove useState for count unless needed
  // const [count, setCount] = useState(0)

  return (
    // The #root div is styled in App.css to be the main flex container
    <>
      <Nav />
      {/* Main content area takes remaining space */}
      <main className="main-content">
        <Home />
        <Services />
        {/* Add other page sections/components here */}
      </main>
      <Footer />
    </>
  );
}

export default App;