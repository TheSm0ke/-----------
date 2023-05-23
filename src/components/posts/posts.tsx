import { urlForDataPosts } from "../../data/data";
import "./posts.css";
import { useDataFromJson } from "hooks/useDataFromJson";

interface PostsProps {
  onOpenModal: (el) => void;
  onContent: (el) => void;
  filter?: string;
}

const Posts = ({ onOpenModal, onContent, filter }: PostsProps) => {
  const newData = useDataFromJson({ urlForDataPosts, onOpenModal, onContent, filter });
  return <div className="posts">{newData}</div>;
};

export default Posts;
