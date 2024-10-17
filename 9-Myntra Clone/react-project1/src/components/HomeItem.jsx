export const HomeItem = ({ item }) => {
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button
        className="btn-add-bag"
        onClick={() => console.log("This item was clicked")}
      >
        Add to Bag
      </button>
    </div>
  );
};
