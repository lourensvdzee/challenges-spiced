import { useState } from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

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

  const handleEditProduct = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        await mutate(`/api/products/${id}`);
        setIsLoading(false);
        setIsEditMode(false);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (response.ok) {
        const result = await response.json();
        router.push("/");
        mutate("/api/products");
      } else {
        console.error(`Failed to delete product with status ${response.status}`);
      }
    } catch (error) {
      console.error(`Failed to delete product: ${error.message}`);
    }
  };


  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProductCard>
      {isEditMode ? (
        <ProductForm onSubmit={handleEditProduct} data={data} />
      ) : (
        <>
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
          <button type="button" onClick={() => setIsEditMode(true)}>
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteProduct(id)}>
            Delete
          </button>
        </>
      )}
    </ProductCard>
  );
}