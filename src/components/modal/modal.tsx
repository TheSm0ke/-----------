import { circle, cross, dataFromApi } from "data/data";
import "./modal.css";

interface ModalProps {
  openModal: Boolean;
  onOpenModal: (el) => void;
  content: dataFromApi;
}

const Modal = ({ openModal, onOpenModal, content }: ModalProps) => {
  const handleClick = (el) => {
    console.log(el);
    if (el.target.className === "modal") {
      onOpenModal(false);
    }
  };
  if (openModal === false)
    return <div className="modal" onClick={handleClick} style={{ display: "none" }} />;

  return (
    <div className="modal" onClick={handleClick}>
      <div className="modal-main">
        <div className="modal-header">
          <div className="modal-header-title">
            <p style={{ margin: "0" }}>
              {content.autor} {circle} {content.date} {circle} {content.views}
            </p>
          </div>
          <div className="modal-header-cross" onClick={() => onOpenModal(false)}>
            {cross}
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-content-img">
            <img
              src={content.img}
              alt={content.title}
              srcSet={content.img_2x}
              width="360px"
              height="230px"
              loading="lazy"
            />
          </div>
          <div className="modal-content-tags">
            <p>{content.tags}</p>
          </div>
          <div className="modal-content-text">
            <p>{content.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
