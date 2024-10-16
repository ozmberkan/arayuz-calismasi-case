import HeroBox1 from "~/assets/Hero/HeroBox1.svg";
import HeroBox2 from "~/assets/Hero/HeroBox2.svg";
import HeroBox3 from "~/assets/Hero/HeroBox3.svg";

import HeroBox1Piece from "~/assets/Hero/HeroBox1Piece.svg";
import HeroBox2Piece from "~/assets/Hero/HeroBox2Piece.svg";
import HeroBox3Piece from "~/assets/Hero/HeroBox3Piece.svg";

import Card1 from "~/assets/ProductList/Card1.png";
import Card2 from "~/assets/ProductList/Card2.png";
import Card3 from "~/assets/ProductList/Card3.png";

import { FaCheck } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { MdOutlinePodcasts } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";

export const navTabs = [
  { id: 1, label: "Products" },
  { id: 2, label: "Solutions" },
  { id: 3, label: "Pricing" },
  { id: 4, label: "Resources" },
  { id: 5, label: "Log In" },
  { id: 6, label: "Sign up Now" },
];

export const HeroSections = [
  {
    id: 1,
    title: "Nibh viverra",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam.Consequat turpis natoque leo, massa.",
    icon: HeroBox1,
    piece: HeroBox1Piece,
  },
  {
    id: 2,
    title: "Nibh viverra",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam.Consequat turpis natoque leo, massa.",
    icon: HeroBox2,
    piece: HeroBox2Piece,
  },
  {
    id: 3,
    title: "Nibh viverra",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam.Consequat turpis natoque leo, massa.",
    icon: HeroBox3,
    piece: HeroBox3Piece,
  },
];

export const ProductListCards = [
  {
    id: 1,
    title: "Title",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image: Card1,
  },
  {
    id: 2,
    title: "Title",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image: Card2,
  },
  {
    id: 3,
    title: "Title",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image: Card3,
  },
];

export const JoinUsTextData = [
  {
    id: 1,
    text: "Est et in pharetra magnaadipiscing ornare aliquam.",
    icon: FaCheck,
  },
  {
    id: 2,
    text: "Tellus arcu sed consequat ac velit ut eu blandit.",
    icon: FaCheck,
  },
  {
    id: 3,
    text: "Ullamcorper ornare in et egestas dolor orci.",
    icon: FaCheck,
  },
];

export const collectionBoxData = [
  { id: 1, text: "Cras eget", icon: LuShieldCheck },
  { id: 2, text: "Dolor pharetra", icon: IoRocketOutline },
  { id: 3, text: "Amet, fringilla", icon: FiMonitor },
  { id: 4, text: "Amet nibh", icon: MdOutlinePodcasts },
  { id: 5, text: "Sed velit", icon: GiSettingsKnobs },
];

export const menuItems = [
  {
    title: "Product",
    links: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
  },
  {
    title: "Solutions",
    links: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"],
  },
  {
    title: "Support",
    links: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
    ],
  },
];
