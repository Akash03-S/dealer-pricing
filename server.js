const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

const dealers = {
    "1": [{"dealer": "Best Dealership", "price": "$3.20"}, {"dealer": "Top Choice Auto", "price": "$3.40"}],
    "2": [{"dealer": "Auto World", "price": "$4.80"}, {"dealer": "City Motors", "price": "$4.95"}],
    "3": [{"dealer": "Discount Wheels", "price": "$3.90"}, {"dealer": "Value Cars", "price": "$4.10"}]
};

app.get('/dealers/:id', (req, res) => {
    const productId = req.params.id;
    const productDealers = dealers[productId];
    if (productDealers) {
        res.json(productDealers);
    } else {
        res.status(404).json({ error: "Dealers not found for this product" });
    }
});

app.listen(port, () => {
    console.log(`Dealer pricing microservice running on port ${port}`);
});
