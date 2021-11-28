import "./App.css";
import Todo from "./components/Todo";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import { database } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const databaseRef = collection(database, "todo-list");
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    alanBtn({
      key: "68e31cce7eda8e4c1f89214e9e8f32e22e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData: any) => {
        addDoc(databaseRef, { item: commandData.data }).then(() => {
          setUpdate(true);
        });
      },
    });
  }, []);

  return (
    <div>
      <Todo databaseRef={databaseRef} update={update} setUpdate={setUpdate} />
    </div>
  );
}

export default App;
