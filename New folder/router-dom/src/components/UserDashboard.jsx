import { useState, useEffect } from "react";

const UserDashboard = () => {
  // Step 3: Define States
  const [userData, setUserData] = useState(null); // To store user data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [extraDetails, setExtraDetails] = useState(false); // To load more user details

  // Step 4: Fetch Data from API using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        ); // Fetching user data
        if (!response.ok) {
          throw new Error("Data could not be fetched");
        }
        const data = await response.json();
        setUserData(data); // Update user data state
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading after the data is fetched
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  // Step 5: Handle Click to Show More Details
  const handleShowMore = () => {
    setExtraDetails(!extraDetails); // Toggle extra details state
  };

  // Step 6: Display loading, error, and user information
  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an error
  }

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <div className="user-info">
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Phone:</strong> {userData.phone}
        </p>
        <p>
          <strong>Website:</strong> {userData.website}
        </p>
      </div>

      {/* Step 7: Conditional Rendering for Extra Details */}
      {extraDetails && (
        <div className="extra-details">
          <p>
            <strong>Company:</strong> {userData.company.name}
          </p>
          <p>
            <strong>Address:</strong>{" "}
            {`${userData.address.street}, ${userData.address.city}`}
          </p>
        </div>
      )}

      {/* Button to toggle extra details */}
      <button onClick={handleShowMore}>
        {extraDetails ? "Hide Details" : "Show More Details"}
      </button>
    </div>
  );
};

export default UserDashboard;
