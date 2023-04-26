import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return { longitude: data.longitude, latitude: data.latitude };
};

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const { data, error, mutate } = useSWR(URL, fetcher, { refreshInterval: 5000 });
  const [isLoading, setIsLoading] = useState(!error && !data);

  useEffect(() => {
    setIsLoading(!error && !data);
  }, [data, error]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  const handleReload = async () => {
    setIsLoading(true);
    try {
      // Call the fetcher function again
      const { longitude, latitude } = await fetcher(URL);
      // Update the data using the mutate function provided by useSWR
      mutate({ longitude, latitude });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      {/* Pass the handleReload function as a prop to the Controls component */}
      <Controls longitude={data.longitude} latitude={data.latitude} onRefresh={() => handleReload()} />
    </main>
  );
}
