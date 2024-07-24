import { useState } from "react";
import { Header } from "./header";
import { ModalWindow } from "./modal-window";
import { Button } from "./ui/button";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const modalWindowToggler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };
  return (
    <>
      <Header modalToggler={modalWindowToggler} />
      {isOpen && 
      <ModalWindow modalTogger={modalWindowToggler}>
        <Button>Добавить задачу</Button>
      </ModalWindow>}
    </>
  );
}

export default App;
