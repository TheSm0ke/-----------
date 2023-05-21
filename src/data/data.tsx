export const urlForDataPosts = "https://cloud.codesupply.co/endpoint/react/data.json";

export const circle: JSX.Element = (
  <svg
    className="post-autor-circle"
    width="3"
    height="4"
    viewBox="0 0 3 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="1.5" cy="2" r="1.5" fill="#D7D7D7" />
  </svg>
);

export const arrowLeft: JSX.Element = (
  <svg
    width="6"
    height="9"
    viewBox="0 0 6 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.33334 7.7L4.66668 4.5L1.33334 1.3"
      stroke="black"
      strokeLinecap="square"
    />
  </svg>
);

export const arrowDown: JSX.Element = (
  <svg
    className="arrow-down"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
  </svg>
);

export interface dataFromApi {
  title: string;
  text: string;
  tags: string;
  autor: string;
  img: string;
  img_2x: string;
  date: string;
  views: string;
}
