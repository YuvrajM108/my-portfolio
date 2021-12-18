import './App.css';
import Project from './components/project/Project';
import jsImg from './images/todo.png';
import rorImg from './images/groups-index-screenshot.png';
import reactImg from './images/carbon-intensity-home-screenshot.png';

function App() {
  return (
    <div className="App">
      <Project coverImg={jsImg} title='Todo List App' desc='A JavaScript app that allows 
      users to add tasks to a to-do list, edit existing tasks, mark tasks as completed, 
      and delete existing tasks.' />
      <Project coverImg={rorImg}
      title='University Project Time Tracker'
      desc='A Ruby On Rails app that allows a user to keep track of the hours that 
      they have spent on specific projects at their university. It also allows them 
      to group these projects by subject.' />
      <Project coverImg={reactImg}
      title='Carbon Intensity Tracker'
      desc='A Ruby On Rails app that allows a user to keep track of the hours that 
      they have spent on specific projects at their university. It also allows them 
      to group these projects by subject.' />
    </div>
  );
}

export default App;
