import Router from "./Router/Router";
import './styles/tailwind.css'


const App=()=>{
const greetings = "Good Morning Mr, Gboluwaga"
  return (
    <div className="bg-light h-screen w-screen">
      <Router greetings={greetings}/>
    </div>
  );
}

export default App;
