import './App.css';
import CommissionCalculator from './components/pages/CommissionCalculator';
import Form from './components/pages/Form';
import Result from './components/pages/Result';
import { useState } from 'react';

function App() {
  
  const [screen, setScreen] = useState("home");
  const [formData, setFormData] = useState(null);

  console.log(screen);
  if (screen === "home") {
    return <CommissionCalculator onNext={() => setScreen("form")} />;

  } else if (screen === "form") {
    return <Form 
      onNext={() => setScreen("result")}
      onData={ setFormData } 
      onCancel={() => setScreen("home")}/>;

  } else if (screen === "result") {
    return <Result 
    data={ formData } 
    onRestart={() => { setScreen("home"); setFormData(null); }}/>;
  }
  return null;
  
}

export default App;
