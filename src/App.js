import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';

import 'bootstrap';
import './App.scss';
import JobAdvertDetail from './pages/JobAdvertisementDetail/JobAdvertDetail';
import CandidateRegister from './pages/CandidateRegister/CandidateRegister';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/jobAdvertDetail" component={JobAdvertDetail} />
          <Route path="/candidateRegister" component={CandidateRegister} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
