import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
// import { products } from "../../../lib/products";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find({});
    response.status(200).json(products);
  } else {
    response.status(400).json({ message: "Wrong HTTP method" });
  }
}
