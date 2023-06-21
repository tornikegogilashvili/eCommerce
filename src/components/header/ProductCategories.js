import React from "react"
import { useProduct } from "../../hooks";
import { List, ListItem, styled } from "@mui/material";
import { Link, Text } from "../atoms";


const StyledListItems = styled(ListItem)(() => ({
    padding: "5px 0px 3px 15px",
    margin: "0px",
}));

export const ProductCategories = () => {
    const { productCategories } = useProduct();
    return (
    <List sx={{ display: "flex" }} >
        {productCategories.map((category) => {
            const { _id, name } = category;
            return(
                <Link to={`/products/categories/${name}?page=1&sort=price,asc`} >
                    <StyledListItems key={_id} >
                        <Text color="#FF9900">{name}</Text>
                    </StyledListItems>
                </Link>
            );
        })}
    </List>
    );
};