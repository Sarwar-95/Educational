import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Courses from './components/Courses/Courses';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/courses/:courseId">
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="*">
            <Error></Error>
          </Route>

        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
