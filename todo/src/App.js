import logo from './logo.svg';
import './App.css';

export function ListaDeTarefas(props) {
  return <ul>
    <li>Tarefa 1: {props.tarefa1}</li>
    <li>Tarefa 2: {props.tarefa2}</li>
    <li>Tarefa 3: {props.tarefa3}</li>
    </ul>;
}

function App() {
  return (
    <div className="App">
      <h1>Tarefas</h1>
      <ListaDeTarefas tarefa1="Tarefa A" tarefa2="Tarefa B" tarefa3="Tarefa C"/>
    </div>
  );
}

export default App;
      
  