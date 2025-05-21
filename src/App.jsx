import { useEffect, useState } from 'react';
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  NewAlert,
  Works,
} from './Components';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show the content after NewAlert has had time to animate
    // NewAlert will move after 1.5 seconds and then it will take about 0.6 second
    // for the transition animation, so we wait 2.1 seconds in total
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2100); // Adjusted timing for smoother transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* NewAlert is always shown immediately */}
      <NewAlert />

      {/* The rest of the content is shown only after the animation */}
      {showContent && (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Works />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
