import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice"; // Replace with actual path to your itemsActions
import { fetchStatusActions } from "../store/fetchStatus"; // Replace with actual path to fetchStatusActions

export const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus); // Get fetchStatus from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    // If fetching is already done, do nothing
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    // Mark fetching as started in Redux state
    dispatch(fetchStatusActions.markFetchingStarted());

    // Fetch data from the API
    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch"); // Handle non-200 response
        return res.json();
      })
      .then(({ items }) => {
        // Once items are fetched, update Redux state
        dispatch(fetchStatusActions.markFetchDone()); // Mark that fetching is complete
        dispatch(fetchStatusActions.markFetchingFinished()); // Mark that fetching has ended
        dispatch(itemsActions.addInitialItems(items)); // Dispatch the fetched items
        console.log("items fetched");
      })
      .catch((error) => {
        console.error("Error fetching items:", error); // Handle fetch errors
      });

    // Cleanup function to abort the fetch if the component unmounts
    return () => {
      console.log("cleaning up useEffect");
      controller.abort();
    };
  }, [fetchStatus, dispatch]); // Run the effect whenever fetchStatus or dispatch changes

  return (
    <div>
      Fetch Done: {String(fetchStatus.fetchDone)} <br />
      Currently Fetching: {String(fetchStatus.currentlyFetching)}
    </div>
  );
};


