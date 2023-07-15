import React from "react";
import { useStore } from "../../component/store";

const ListPage = () => {
  const { selectedNoteId, setSelectedNoteId } = useStore();

  const handleNoteClick = (noteId) => {
    setSelectedNoteId(noteId);
    // Chuyển người dùng đến trang B
    // Cách chuyển trang tùy thuộc vào cấu trúc của ứng dụng của bạn
  };
  console.log(selectedNoteId);

  return (
    <div>
      <h1>List of Notes</h1>
      <ul>
        <li
          className="w-[30%] bg-red-500 border"
          onClick={() => handleNoteClick(1)}
        >
          Note 1
        </li>
        <li
          className="w-[30%] bg-red-500 border"
          onClick={() => handleNoteClick(2)}
        >
          Note 2
        </li>
        <li
          className="w-[30%] bg-red-500 border"
          onClick={() => handleNoteClick(3)}
        >
          Note 3
        </li>
      </ul>
    </div>
  );
};

export default ListPage;
