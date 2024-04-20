import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './configs/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth'

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  // State variables to store user information and loading status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // useEffect hook to listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log('onAuthStateChanged', user);
      setUser(user);
      setLoading(false);
    });
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const onSignOut = async () => {
    // Function to handle user sign out
    await signOut(auth);
  }

  return (
    <div>
      {
       <>
              {/* Route for sign up page */}
              <SignUp />
              </>
        
      }
    </div>
  )
}

export default App;