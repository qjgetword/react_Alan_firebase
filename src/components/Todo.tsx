import { getDocs, doc, deleteDoc } from "@firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { database } from "../firebase-config";

export default function Todo({ databaseRef, update, setUpdate }: any) {
  const fixture = [
    {
      item: "微信",
      id: "weixin",
    },
    {
      item: "QQ",
      id: "tencent",
    },
  ];
  const [todoList, setTodoList] = useState<any>(fixture);

  // const getData = async () => {
  //   const data = await getDocs(databaseRef);
  //   setTodoList(
  //     data.docs.map((item: any) => ({ ...item.data(), id: item.id }))
  //   );
  // };

  const getData = useCallback(async () => {
    const data = await getDocs(databaseRef);
    // setTodoList(
    //   data.docs.map((item: any) => ({ ...item.data(), id: item.id }))
    // );
  }, [databaseRef]);

  useEffect(() => {
    getData();
    setUpdate(false);
  }, [update]);

  const deleteItems = (id: string) => {
    const data = doc(database, "todo-list", id);
    deleteDoc(data).then(() => {
      getData();
    });
  };

  // 打开客户端
  const openItems = (id: string) => {
    console.log(id);

    window.open(id + "://");
  };

  return (
    <div className="todo-main">
      <h2 className="header">Voice-based Todo Application</h2>

      <div className="todo-card">
        {todoList.map((todo: any) => {
          return (
            <div className="todo-list" key={todo.id}>
              <h3 className="todo-item" onClick={() => openItems(todo.id)}>
                {todo.item}
              </h3>
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
