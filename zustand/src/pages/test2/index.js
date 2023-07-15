import React from "react";
import { useStore } from "../../component/store";

const DetailPage = () => {
  // const { selectedNoteId } = useStore();
  // console.log(selectedNoteId);

  // Sử dụng selectedNoteId để truy cập vào thông tin chi tiết của ghi chú

  function BearCounter() {
    //hiển thị function bear ra màn hình
    const bears = useBearStore((state) => state.bears);
    return <h1>{bears} around here ...</h1>;
  }

  return (
    <div>
      <h1>Note Details</h1>
      {/* <p>Selected Note ID: {selectedNoteId}</p> */}
      {BearCounter}
      {/* Hiển thị thông tin chi tiết của ghi chú */}
    </div>
  );
};

export default DetailPage;
