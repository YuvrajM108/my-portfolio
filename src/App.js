import './App.css';
import Project from './components/project/Project';
import jsImg from './images/todo.png';

function App() {
  return (
    <div className="App">
      <Project coverImg={jsImg} title='Todo List App' desc='A JavaScript app that allows
      users to add tasks to a to-do list, edit existing tasks, mark tasks as completed,
      and delete existing tasks.' />
    </div>
  );
}

export default App;
