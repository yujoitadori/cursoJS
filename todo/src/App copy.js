import logo from './logo.svg';
import './App.css';

export function Todo(prop) {
  return (
		<div>
			<p>Tarefa: {props.todo}</p>
		</div>
	);
}

const todo1 = <Todo todo="Estudar" />;
const todo2 = <Todo todo="Ir pra escola" />;
const todo3 = <Todo todo="Arrumar a casa" />;
const todo4 = <Todo todo="Dar banho no cachorro" />;

function App() {
  return (
    <div className="App">
      <h1>Tarefas</h1>
      <div id="1"></div>
      <div id="2"></div>
      <div id="3"></div>
      <div id="5"></div>
    </div>
  );
}

export default App;

ReactDOM.render(
  todo,
  document.getElementById('1')
  );
      
  