import facebook from "./assets/socials/facebook.svg";
import pinterest from "./assets/socials/pinterest.svg";
import reddit from "./assets/socials/reddit.svg";
import spotify from "./assets/socials/spotify.svg";
import twitter from "./assets/socials/twitter.svg";
import youtube from "./assets/socials/youtube.svg";
import logoSvg from "./assets/logo.svg";
import greekSalad from "./assets/main/greekSalad.png";
import bruchetta from "./assets/main/bruchetta.png";
import lemonDessert from "./assets/main/lemonDessert.png";
import leeHuiYi from "./assets/faces/leeHuiYi.png";
import unnati from "./assets/faces/unnati.png";
import urvashi from "./assets/faces/urvashi.png";
import yuqiCHEN from "./assets/faces/yuqiCHEN.png";
export const name = "Little Lemon";
export const city = "Chicago";
export const description =
  "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
export const mobile = "(312) 555-6789";
export const email = "contact@littlelemon.com";
export const addressLine1 = "1234 Citrus Avenue";
export const addressLine2 = "Chicago, IL 60601";
export const logo = logoSvg;
export const socials = [
  { name: "Facebook", link: "https://www.facebook.com", icon: facebook },
  { name: "Pinterest", link: "https://www.pinterest.com", icon: pinterest },
  { name: "Reddit", link: "https://www.reddit.com", icon: reddit },
  { name: "Spotify", link: "https://www.spotify.com", icon: spotify },
  { name: "Twitter", link: "https://www.twitter.com", icon: twitter },
  { name: "YouTube", link: "https://www.youtube.com", icon: youtube },
];
export const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Menu", link: "/menu" },
  { name: "Reservations", link: "/reservations" },
  { name: "Order Online", link: "/order-online" },
  { name: "Login", link: "/login" },
];
export const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greekSalad,
    alt: "A plate of greek salad with a forkspoon.",
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruchetta,
    alt: "A wooden plate of four bruchettas.",
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is an authentic as can be imagined.",
    image: lemonDessert,
    alt: "Lemon dessert kept on table with a spoon with lemons in the background.",
  },
];
export const testimonials = [
  {
    name: "Lee Hui Yi",
    rating: 5,
    comment:
      "I love the food and the service. The staff is very friendly and the food is delicious",
    image: leeHuiYi,
  },
  {
    name: "Unnati",
    rating: 4,
    comment:
      "The food is great, the service is good. I would definitely recommend this place.",
    image: unnati,
  },
  {
    name: "Urvashi",
    rating: 5,
    comment:
      "I love the food and the service. The staff is very friendly and the food is delicious",
    image: urvashi,
  },
  {
    name: "Yuqi CHEN",
    rating: 4,
    comment:
      "The food is great, the service is good. I would definitely recommend this place.",
    image: yuqiCHEN,
  },
];
export const occasions = ["Birthday", "Anniversary"];
