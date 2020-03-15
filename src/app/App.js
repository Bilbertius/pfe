import React from 'react';
import { Link ,Switch, Route} from 'react-router-dom';
import LandingPage from '../routes/LandingPage/LandingPage';

import ErrorPage from '../routes/ErrorPage/ErrorPage';
import '../styles/App.css';
import AdoptionPage from '../routes/AdoptionPage/AdoptionPage';

class App extends React.Component {
  
  
  
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/'>Petful - An Adoption Agency</Link>
        </nav>
      </header>
      <main className="main">
        <Switch>
          <Route exact path='/' >
            <LandingPage />
          </Route>
          <Route path={'/error'}>
            <ErrorPage />
          </Route>
          <Route  path='/adoption' >
            <AdoptionPage />
          </Route>
        </Switch>
      </main>
    </div>
    )
  }
}
export default App;
