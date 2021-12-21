import './App.css';
import Project from './components/project/Project';
import jsImg from './images/todo.png';
import rorImg from './images/groups-index-screenshot.png';
import reactImg from './images/carbon-intensity-home-screenshot.png';

function App() {
  return (
    <div className="App">
      <Project coverImg={jsImg}
      title='Todo List App'
      desc='A JavaScript app that allows 
      users to add tasks to a to-do list, edit existing tasks, mark tasks as completed, 
      and delete existing tasks.' />
      <Project coverImg={rorImg}
      title='University Project Time Tracker'
      desc='A Ruby On Rails app that allows a user to keep track of the hours that 
      they have spent on specific projects at their university. It also allows them 
      to group these projects by subject.' />
      <Project coverImg={reactImg}
      title='Carbon Intensity Tracker'
      desc='A simple React application that fetches and displays data about the carbon
       intensity of the various districts in Great Britain.' />
      <Project title='Car Reservation Website' 
      desc='A web application with a React front end and a Rails API back end that allows the user to 
      add cars to the catalogue, delete cars, and reserve cars.' />
    </div>
  );
}

export default App;
