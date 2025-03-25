import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';
import './App.css';

const App = () => {
  return (
   <div>
      <Greeting name="Іван" />
        <Message text="Як справи ?" />
        <Button newText="Яка погода у вас" />
   </div>
  );
}

export default App;
