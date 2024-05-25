import { useState } from "react";
import Modal from "./modal"

function App() {
    const [open, setOpen] = useState(false);

  return (
    <div className="grid h-screen place-content-center">
        <button onClick={() => setOpen(true)} className="rounded-2xl p-4 bg-indigo-500">Open modal</button>
        <Modal open={open} setOpen={setOpen} />
    </div>
  )
}

export default App
