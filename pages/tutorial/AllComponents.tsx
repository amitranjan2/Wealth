// Import necessary dependencies and components
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SkeletonLoader from "./SkeletonLoader";
import { /* ... other imports ... */ } from "../../src/components";
import { /* ... other imports ... */ } from "../../src/constants/codeBlocks";

// Define the interface for side button links

// Define the AllComponents functional component
const AllComponents = () => {
  const router = useRouter();
  const routerIncludesHash = router.asPath.includes("#");
  const [activeHash, setActiveHash] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      // Simulate an asynchronous data fetching process
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false); // Set loading to false when data is "loaded"
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <SkeletonLoader /> // Display SkeletonLoader while loading
      ) : (
        // Render the actual content when data is "loaded"
        <div>
          {/* ... rest of your component code ... */}
        </div>
      )}
    </div>
  );
};

export default AllComponents;
