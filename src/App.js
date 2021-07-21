import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';

import 'bootstrap';
import './App.scss';
import JobAdvertDetail from './pages/JobAdvertisementDetail/JobAdvertDetail';
import CandidateRegister from './pages/CandidateRegister/CandidateRegister';
import CandidateCv from './components/CandidateCv/CandidateCv'
import CandidateCvs from './components/CandidateCvs/CandidateCvs'
import JobAdvertisements from './components/JobAdvertisements/JobAdvertisements';
import Aside from './layouts/Aside/Aside';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />



        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/candidateRegister" component={CandidateRegister} />
          <div className="container">
            <div className="row">
              <div className="col-lg-3 d-none d-lg-block">
                <Aside />
              </div>
              <div className="col-lg-9 col-12">
                <Route path="/jobAdvertDetail" component={JobAdvertDetail} />
                <Route path="/jobAdverts" component={JobAdvertisements} />
                <Route exact path="/cvs" component={CandidateCvs} />
                <Route path="/cvs/:id" component={CandidateCv} />
              </div>
            </div>
          </div>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
