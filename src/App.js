import './App.css';
import {
 OrderStatusCreateForm 
} from './ui-components';
import {
 GetOrderStatusForm 
} from './GetOrderStatusForm';

function App() {
  return (
    <div className="App">
        <OrderStatusCreateForm />
        <GetOrderStatusForm />
    </div>
  );
}

export default App;
