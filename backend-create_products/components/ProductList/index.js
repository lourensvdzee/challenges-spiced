import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledButton } from "../Button/Button.styled";

export default function ProductList() {
  const router = useRouter();
  const { data } = useSWR("/api/products");

  // console.log(data);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((product) => (
          <li key={product._id}>
            <StyledButton
              type="button"
              onClick={() => router.push(`/${product._id}`)}
            >
              {product.name}
            </StyledButton>
          </li>
        ))}
      </StyledList>
    </>
  );
}
