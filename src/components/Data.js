import Shirt from '../images/shirt.jpg';
import Pant from '../images/pant.jpg';
import Bag from '../images/bag.jpg';
import WatchMen from '../images/watchformen.jpg';
import MenJewellery from '../images/menjewellery.jpg';
import MenJ from '../images/menjewellery1.jpg';
import MenJewel from '../images/menjewellery2.jpg';
import WomenJewellery from '../images/womenjewellery.jpg';
import WomenJewel from '../images/womenjewellery1.jpg';
import watchforwomen from '../images/watchforwomen.jpg';
import { v4 as uuidv4 } from "uuid";
export default {
products:[

    {
id:uuidv4(),
image:Shirt,
type:"Shirt for men",
title:"Slim Shirt",
price:"15",},

{
id:uuidv4(),  
image:Pant,
type:"Pant for men",
title:"Jeans Pant",
price:20},

{
id:uuidv4(),
image:Bag,
type:"Bag for Women",
title:"Fancy Bag",
price:25},

{
id:uuidv4(),
image:WatchMen,
type:"Watch for men",
title:"Boss Special Watch",
price:100},

{
id:uuidv4(),
image:watchforwomen,
type:"Watch for women",
title:"Titan Special Ed",
price:100},
{
id:uuidv4(),
image:WomenJewellery,
type:"Jewellery for women",
title:"Gold Set 22 Carat",
price:1000},
{
id:uuidv4(),
image:WomenJewel,
type:"Jewellery for women",
title:" Gold Earrings",
price:1200},
{
id:uuidv4(),
image:MenJewellery,
type:"Bracelet for men",
title:"Simple Bracelet",
price:150},
{
id:uuidv4(),
image:MenJ,
type:"Bracelet for men",
title:"Silver Bracelet",
price:500},
{
id:uuidv4(),
image:MenJewel,
type:"Chain for men",
title:"Diamond Cut Chain",
price:1500},
]

}