import InfoShow from './components/InfoShow';
import './App.css';
const myFavouriteWebs = [
  { title: "React Native", url: "https://reactnative.dev/" },
  { title: "Node.js", url: "https://nodejs.org/en" }
]
function App() {
  return (
<InfoShow web={myFavouriteWebs}/>
  );
}

export default App;
