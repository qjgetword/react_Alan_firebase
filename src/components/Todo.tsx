import { getDocs, doc, deleteDoc } from "@firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { database } from "../firebase-config";

export default function Todo({ databaseRef, update, setUpdate }: any) {
  const [todoList, setTodoList] = useState<any>([]);

  // const getData = async () => {
  //   const data = await getDocs(databaseRef);
  //   setTodoList(
  //     data.docs.map((item: any) => ({ ...item.data(), id: item.id }))
  //   );
  // };

  const getData = useCallback(async () => {
    const data = await getDocs(databaseRef);
    setTodoList(
      data.docs.map((item: any) => ({ ...item.data(), id: item.id }))
    );
  }, [databaseRef]);

  useEffect(() => {
    getData();
    setUpdate(false);
  }, [update]);

  const deleteItems = (id: string) => {
    console.log(id);
    const data = doc(database, "todo-list", id);
    deleteDoc(data).then(() => {
      getData();
    });
  };

  return (
    <div className="todo-main">
      <h2 className="header">Voice-based Todo Application</h2>

      <div className="todo-card">
        {todoList.map((todo: any) => {
          return (
            <div className="todo-list" key={todo.id}>
              <h3 className="todo-item">{todo.item}</h3>
              <FiX
                className="close-icon"
                onClick={() => deleteItems(todo.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
