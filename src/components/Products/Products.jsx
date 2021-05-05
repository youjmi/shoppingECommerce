import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product"

const products = [
    {
        id: 1,
        name: "Shoes",
        description: "Running Shoes",
        price: "$70",
        image: "https://media.cntraveler.com/photos/603e8e5eb3c7f5651f698239/master/pass/BestRunningSneakers-2021-Hoka-Lede.jpg"
    },

    {
        id: 2,
        name: "MacBook",
        description: "Apple Laptop",
        price: "$2500",
        image: "https://s.yimg.com/uu/api/res/1.2/VdXz5M1C_iG128m92_cgFw--~B/aD0xMjEzO3c9MTk1NzthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-12/d37e0460-3eeb-11eb-b7f9-449e864b9135.cf.jpg"
    },

]

const Products = () => {

    return (
        <main>
            TESTING
            <Grid container justify="center" spacing={4} >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );

}

export default Products;