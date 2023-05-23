import Modal from "components/modal/modal";
import Posts from "../posts/posts";
import "./body.css";
import { useState } from "react";
import { dataFromApi } from "data/data";

interface BodyProps {
  filter: string;
}

const Body = ({ filter }: BodyProps) => {
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
      {filter}
      <Posts onOpenModal={(el) => setOpenModal(el)} onContent={setContent} />
    </div>
  );
};

export default Body;
