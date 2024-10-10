import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import './styles/nav.css'

import Home from './components/pages/Home';
import Todos from './components/pages/Todos';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
            <Link to="/">Home</Link>
            <Link to="/todos">ToDo</Link>
        </nav>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/todos" Component={Todos} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
