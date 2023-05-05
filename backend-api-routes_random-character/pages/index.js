import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Twitter Name: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
      {/* add more keys here as desired */}
    </div>
  );
}
