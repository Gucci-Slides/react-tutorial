import './App.css';
import Title from './components/Title'
import Modal from './components/Modal'
import { useState } from 'react';

const subtitle = "first subtitle"

function App() {
  const [showModal, setShowModal] = useState(true)

  const handleClose = () => {
    setShowModal(false)
  }

  console.log(showModal)

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />
      <Title title="another title" subtitle="another subtitle" />

      {showModal && <Modal handleClose={handleClose}>
        <h3>10% off coupon code</h3>
        <p>use code gangsta at checkout</p>
      </Modal>}
    </div>
  );
}

export default App;
