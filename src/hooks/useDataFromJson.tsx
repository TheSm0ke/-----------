import Post from "components/post/post";
import { dataFromApi, noData } from "data/data";
import { useEffect, useState } from "react";

interface useDataFromJsonProps {
  urlForDataPosts: string;
  onOpenModal: (el) => void;
  onContent: (el) => void;
  filter?: string;
}

export const useDataFromJson = ({
  urlForDataPosts,
  onOpenModal,
  onContent,
  filter,
}: useDataFromJsonProps) => {
  const [newData, setNewData] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const fromDataToJsx = (data: dataFromApi[]) => {
      const newData = data.map((el, index) => {
        return (
          <Post data={el} key={index} onOpenModal={onOpenModal} onContent={onContent} />
        );
      });
      return newData;
    };

    const emptyPost = (
      <div
        style={{
          height: "auto",
          width: "10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontWeight: "700",
        }}>
        {noData}
        <p>No data</p>
      </div>
    );

    fetch(urlForDataPosts)
      .then((res) => res.json())
      .then((data: dataFromApi[]) => {
        if (Number(filter?.length) > 0) {
          const filteredData = data.filter(
            (el) =>
              el.text.toLowerCase().includes(String(filter).toLowerCase()) ||
              el.title.toLowerCase().includes(String(filter).toLowerCase())
          );
          setNewData(fromDataToJsx(filteredData));
          if (filteredData.length === 0) setNewData([emptyPost]);
        } else {
          setNewData(fromDataToJsx(data));
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, [filter, onContent, onOpenModal, urlForDataPosts]);
  return newData;
};
