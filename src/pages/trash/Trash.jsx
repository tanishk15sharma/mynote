import React from "react";
import { TrashCard } from "../../components/trash/TrashCard";
import { useTrash } from "../../context/TrashContext";
import bgDeleteImg from "../../components/assets/deletebg-img.svg";
const Trash = () => {
  const { trash, setTrash } = useTrash();

  return (
    <div className="w100">
      <h3 className="pointer " onClick={() => setTrash([])}>
        CLEAR ALL
      </h3>
      {trash.length === 0 ? (
        <div className="dim-6">
          <img src={bgDeleteImg} className="bg-img" />
          <h2 className="txt-center">No Notes in Recycle Bin</h2>
        </div>
      ) : (
        <div>
          {trash.map((note) => (
            <TrashCard note={note} key={note._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export { Trash };
