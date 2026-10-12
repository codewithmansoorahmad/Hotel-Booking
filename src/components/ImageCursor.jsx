import { Heart } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorites } from "../redux/Slice";

export default function ImageCursor({ hotelDetails }) {
  const dispatch = useDispatch();
  const favoriteHotels = useSelector((state) => state.favorite.hotels);
  let findHotel = favoriteHotels.find((item) => item.id === hotelDetails.id);

  function checkHotels(hotel) {
    let findHotel = favoriteHotels.find((item) => item.id === hotel.id);
    if (!findHotel) {
      dispatch(addToFavorite(hotel));
    } else {
      dispatch(removeFromFavorites(hotel));
    }
  }
  const [url, setUrl] = useState(hotelDetails.image);
  return (
    <div className="images-page">
      <h1>{hotelDetails.name} Images</h1>

      <div className="image-cursor">
        <div className="main-image">
          <button onClick={() => checkHotels(hotelDetails)}>
            <Heart
                fill={favoriteHotels.find((hotel)=>hotel.id===hotelDetails.id)?"red":"white"}

              />

          </button>

          <img  src={`${import.meta.env.BASE_URL}${url.slice(1)}`} alt="" />
        </div>
        <div className="images">
          {hotelDetails.images.map((item, index) => {
            return (
              <img
    src={`${import.meta.env.BASE_URL}${item.slice(1)}`}
                alt=""
                key={index}
                onClick={() => setUrl(item)}
                className={item == url ? "focus" : "null"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
