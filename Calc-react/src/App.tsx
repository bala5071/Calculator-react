import { useState } from 'react';
import Calculatortitle from './components/calculatorTitle';
import OutputScreen from './components/outputscreen';
import Button from './components/button';
import { evaluate } from 'mathjs';
import './index.css';

function App() {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;

    switch (value) {
      case "=": {
        if (question !== "") {
          let ans = "";
          try {
            ans = evaluate(question);
          } catch (err) {
            setAnswer("Math Error");
          }
          if (ans === undefined) {
            setAnswer("Math Error");
          } else {
            setAnswer(ans.toString());
            setQuestion("");
          }
        }
        break;
      }
      case "Clear": {
        setQuestion("");
        setAnswer("");
        break;
      }
      case "Delete": {
        setQuestion(question.slice(0, -1));
        break;
      }
      default: {
        setQuestion(question + value);
        break;
      }
    }
  }

  return (
    <div id='root'>
      <Calculatortitle />
      <OutputScreen question={question} answer={answer} />
      <div className="button-row">
        <Button label="Clear" handleClick={handleClick} />
        <Button label="Delete" handleClick={handleClick} />
        <Button label="." handleClick={handleClick} />
        <Button label="/" handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label="7" handleClick={handleClick} />
        <Button label="8" handleClick={handleClick} />
        <Button label="9" handleClick={handleClick} />
        <Button label="*" handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label="4" handleClick={handleClick} />
        <Button label="5" handleClick={handleClick} />
        <Button label="6" handleClick={handleClick} />
        <Button label="-" handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label="1" handleClick={handleClick} />
        <Button label="2" handleClick={handleClick} />
        <Button label="3" handleClick={handleClick} />
        <Button label="+" handleClick={handleClick} />
      </div>
      <div className="button-row">
        <Button label="0" handleClick={handleClick} />
        <Button label="=" handleClick={handleClick} />
      </div>
    </div>
  )
}

export default App;
