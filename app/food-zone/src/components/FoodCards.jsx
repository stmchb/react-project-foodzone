let BASE_URL = "http://localhost:9000";

const FoodCards = ({ foodData, typeFood, searchedFood }) => {
  return (
    <>
      <div className="card_main_container">
        {searchedFood?.map((data, index) => (
          <div className="card" key={index}>
            <div className="item_image">
              <img
                src={`${BASE_URL}${data.image}`}
                alt={data.name || "Food Item"}
              />
            </div>

            <div className="item_details">
              <h2 className="item_name">{data.name || "Food Item"}</h2>
              <p className="item_desc">
                {data.description ||
                  "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est."}
              </p>
              <button className="item_price_btn">
                {data.price ? `$${data.price}` : "$10.00"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FoodCards;
