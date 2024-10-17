import { useSelector } from "react-redux";
import { HomeItem } from "../components/HomeItem";

export const Home = () => {
  const items = useSelector((store) => store.items); // Access the items array from Redux

  // Log to check the items
  console.log("Items from Redux store:", items);

  // Handle cases where there are no items
  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <main>
      <div className="items-container">
        {/* Map through the items and render HomeItem for each */}
        {items.map((item, index) => (
          <HomeItem key={index} item={item} />
        ))}
      </div>
    </main>
  );
};
