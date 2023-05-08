/* new review form */

import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import Review from "../../../db/models/Review";

export default async function handler(req, res) {
    const {
        query: { productId },
        body: { title, text, rating },
        method,
    } = req;

    await dbConnect();

    switch (method) {
        case "POST":
            try {
                const product = await Product.findById(productId);
                const review = await new Review({ title, text, rating });
                await review.save();
                product.reviews.push(review._id);
                await product.save();
                res.status(201).json({ success: true, review });
            } catch (error) {
                console.error(error);
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

