import { urlForDataPosts } from "../../data/data";
import "./posts.css";
import { useDataFromJson } from "hooks/useDataFromJson";

interface PostsProps {
  onOpenModal: (el) => void;
  onContent: (el) => void;
}

const Posts = ({ onOpenModal, onContent }: PostsProps) => {
  const newData = useDataFromJson({ urlForDataPosts, onOpenModal, onContent });
  return <div className="posts">{newData}</div>;
};

export default Posts;
