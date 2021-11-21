import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Seriveces/Services';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ScrollToTop from './utilities/ScrollToTop';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <ScrollToTop></ScrollToTop>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/services" component={Services} />
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={NotFound}/>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
