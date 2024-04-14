import { CARD_URL } from "../common/constant";
const Card = (props) => {
  // console.log(props)
  const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData?.info;
  return (
    <div className="card-container">
      <img className="card-img" src={ CARD_URL  + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <div>{cuisines.join(",")}</div>
      <div>{avgRating}</div>
      <div>{sla.deliveryTime} mins</div>
    </div>
  );
};

export default Card;
