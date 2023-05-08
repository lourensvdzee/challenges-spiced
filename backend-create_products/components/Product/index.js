/* incl. new review form */

import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { useState } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null);

  const [isLoading, setIsLoading] = useState(false);

  const handleAddReview = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const reviewData = Object.fromEntries(formData);

    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: "POST",
        body: JSON.stringify(reviewData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        // const { review } = await res.json();
        await mutate(`/api/products/${id}`);
        setIsLoading(false);
        event.target.reset();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <form onSubmit={handleAddReview}>
        <label htmlFor="title">Title:</label>
        <br />
        <input type="text" id="title" name="title" />
        <br />
        <label htmlFor="text">Text:</label>
        <br />
        <textarea id="text" name="text" />
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input type="number" id="rating" name="rating" min="1" max="5" />
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Review"}
        </button>
      </form>
      <StyledButton type="button" onClick={() => router.push("/")}>
        Back to all
      </StyledButton>
    </ProductCard>
  );
}

