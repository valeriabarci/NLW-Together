import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";

import { AuthContext.Provider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
    <AuthContext.Provider>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </AuthContext.Provider>  
    </BrowserRouter>
  );
}

export default App;
