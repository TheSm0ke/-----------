import Modal from "components/modal/modal";
import Posts from "../posts/posts";
import "./body.css";
import { useState } from "react";
import { dataFromApi } from "data/data";

const Body = () => {
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState<dataFromApi>({
    title: "",
    text: "",
    tags: "",
    autor: "",
    img: "",
    img_2x: "",
    date: "",
    views: "",
  });

  return (
    <div className="body">
      <Modal
        content={content}
        openModal={openModal}
        onOpenModal={(el) => setOpenModal(el)}
      />
      <Posts onOpenModal={(el) => setOpenModal(el)} onContent={setContent} />
    </div>
  );
};

export default Body;
