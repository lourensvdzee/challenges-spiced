import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
    const { data } = useSWR('/api/products', fetcher);

    if (!data) return <p>Loading...</p>;

    return (
        <ul>
            {data.map((product) => (
                <li key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}{product.currency}</p>
                    <p>Category: {product.category}</p>
                </li>
            ))}
        </ul>
    );
}
