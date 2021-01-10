import React from "react";

const Complete = (props) => {
  const { todos1, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos1.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Complete;
