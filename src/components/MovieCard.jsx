import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="m-1 w-36">
      <img alt="Movies Img" src={IMG_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
