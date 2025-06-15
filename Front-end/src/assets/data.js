import img1 from "./10001.jpg";
import img2 from "./10002.jpg";
import img3 from "./10003.jpg";
import img4 from "./10004.jpg";
import img5 from "./10005.jpg";
import img6 from "./usa.png";
import logo from "./amazon.png";

import catagoryImage1 from "./boy.png";
import catagoryImage2 from "./Cartoon.png";
import catagoryImage3 from "./games.png";
import catagoryImage4 from "./sport.png";

const DropDowns = [
  { id: "all", name: "All Departments" },
  { id: "arts-crafts", name: "Arts, Crafts & Sewing" },
  { id: "automotive", name: "Automotive" },
  { id: "baby", name: "Baby" },
  { id: "beauty", name: "Beauty & Personal Care" },
  { id: "books", name: "Books" },
  { id: "computers", name: "Computers & Accessories" },
  { id: "electronics", name: "Electronics" },
  { id: "womens-fashion", name: "Women's Fashion" },
  { id: "mens-fashion", name: "Men's Fashion" },
  { id: "girls-fashion", name: "Girls' Fashion" },
  { id: "boys-fashion", name: "Boys' Fashion" },
  { id: "health-household", name: "Health & Household" },
  { id: "home-kitchen", name: "Home & Kitchen" },
  { id: "industrial-scientific", name: "Industrial & Scientific" },
  { id: "luggage", name: "Luggage & Travel Gear" },
  { id: "movies-tv", name: "Movies & TV" },
  { id: "music", name: "CDs & Vinyl" },
  { id: "pet-supplies", name: "Pet Supplies" },
  { id: "software", name: "Software" },
  { id: "sports-outdoors", name: "Sports & Outdoors" },
  { id: "tools-home-improvement", name: "Tools & Home Improvement" },
  { id: "toys-games", name: "Toys & Games" },
  { id: "video-games", name: "Video Games" },
  { id: "amazon-fresh", name: "Amazon Fresh" },
  { id: "kindle-store", name: "Kindle Store" },
  { id: "prime-video", name: "Prime Video" },
  { id: "amazon-pharmacy", name: "Amazon Pharmacy" },
];

export const catagorey = [
  {
    category: "Electronics",
    link: "https://t.co/Fha4Ks9Gho",
    img: catagoryImage1,
  },

  {
    category: "Men's Clothing",
    link: "https://taelor.style",
    img: catagoryImage2,
  },

  {
    category: "Jewelry",
    link: "https://diamondrensu.com",
    img: catagoryImage3,
  },
  {
    category: "Discover fashion and trends",
    link: "https://diamondrensu.com",
    img: catagoryImage4,
  },
];

export const img = [img1, img2, img3, img4, img5];

export default { img6, DropDowns, logo };
