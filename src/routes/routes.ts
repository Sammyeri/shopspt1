//require the express module
import express from "express";

//create new router object
const routes = express.Router();

interface Shop {
    id: number;
    name: string;
    rating: number;
}

let shops: Shop[] = [
    {id: 111, name: "Pepper's Pizza", rating: 4.5},
    {id: 222, name: "Clive's Chives", rating: 3.4},
    {id: 333, name: "Betty's Brews", rating: 3.8},
    {id: 444, name: "Sylverster's Shoes", rating: 3.8},
    {id: 555, name: "Teddy's Tunes", rating: 4.7}
]

routes.get("/api/shops", (req, res) => {
    let minRating = Number(parseFloat(req.query["minRating"] as string));
    let filteredShops:Shop[] =[];
//filter not for each
    if(minRating){
       shops = shops.filter((shop)=>{
            if(shop.rating >= minRating){
                return shop
            };
        });
    } else {
        shops =  [{id: 111, name: "Pepper's Pizza", rating: 4.5},
        {id: 222, name: "Clive's Chives", rating: 3.4},
        {id: 333, name: "Betty's Brews", rating: 3.8},
        {id: 444, name: "Sylverster's Shoes", rating: 3.8},
        {id: 555, name: "Teddy's Tunes", rating: 4.7}]
    }
    res.status(200);
    res.json(shops);
})

routes.get("/api/shops/:id", (req, res) =>{
    let id = Number.parseInt(req.params.id);
    let singleShop;
    if(id > 0){
        singleShop = shops.find((shop) => {
            if(shop.id === id){
                return shop
            } 
        });
        if(!singleShop){
            singleShop = `Error: Shop not found: ${id}`;
        }
    } 
    res.json(singleShop);
})
export default routes;