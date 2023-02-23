import './App.css';
import { Increment,Decrement,Multiplication,Division } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const indecstate = useSelector((state)=>{
    return state.IncreDecrementno
  })
  const muldivstate = useSelector((state)=>{
    return state.MulDivno
  })
  return (
    <div className="main-div">
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h2>using React and Redux</h2>
        <div className="quantity">
          <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(Decrement())}><span>-</span></a>
          <input name="quantity" type="text" className="quantity__input" value={indecstate}/>
          <a className="quantity__plus" title="Increment" onClick={()=>dispatch(Increment(5))}><span>+</span></a>
        </div>
        <p></p>
        <h1>Multiplication/Division counter</h1>
        <h2>using React and Redux</h2>
        <div className="quantity">
          <a className="quantity__mul" title="Multiplication" onClick={()=>dispatch(Multiplication(5))}><span>*</span></a>
          <input name="quantity" type="text" className="quantity__input" value={muldivstate}/>
          <a className="quantity__div" title="Division" onClick={()=>dispatch(Division())}><span>/</span></a>
        </div>
      </div>
    </div>
  );
}

export default App;
