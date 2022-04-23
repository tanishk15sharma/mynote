import React from "react";
import { useNotes } from "../../context/NotesContext";
import { Toast } from "../toast/Toast";
import { NoteCard } from "./note-card/NoteCard";
import noteImgBg from "../../assets/note-img.svg";
const NotesListing = () => {
  const { notes } = useNotes();

  const pinnedNotes = notes?.filter((note) => note.isPinned);
  const otherNotes = notes?.filter((note) => !note.isPinned);

  return (
    <div className="pd-1 ">
      {!notes.length ? (
        <div className="dim-6">
          <img src={noteImgBg} className="bg-img" alt="notes bg image" />
          <h2 className="txt-center">Add your Jot's !</h2>
        </div>
      ) : (
        <>
          {pinnedNotes.length !== 0 && (
            <>
              <h5 className=" w70 dim-5">PINNED</h5>
              {pinnedNotes.map((note) => (
                <NoteCard note={note} key={note._id} />
              ))}
            </>
          )}
          {otherNotes.length !== 0 && (
            <>
              <h5 className=" w70 dim-5">OTHERS</h5>
              {otherNotes.map((note) => (
                <NoteCard note={note} key={note._id} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export { NotesListing };
