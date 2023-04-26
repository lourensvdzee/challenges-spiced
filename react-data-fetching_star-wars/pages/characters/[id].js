import useSWR from "swr";
import Card from "../../components/Card";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

    if (error) {
        return <p>Failed to load character</p>;
    }

    if (!data) {
        return <p>Loading character...</p>;
    }

    const { name, height, eye_color: eyeColor, birth_year: birthYear } = data;

    return <Card id={1} name={name} height={height} eyeColor={eyeColor} birthYear={birthYear} />;
}
