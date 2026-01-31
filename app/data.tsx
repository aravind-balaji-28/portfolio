"use client";
import { Instagram, LinkedIn, GitHub, Mail, ShoppingBagOutlined } from '@mui/icons-material';

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About me", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact me", id: "contact" },
];
export const SKILLS = [
  { icon: "html", title: "HTML", value: 88 },
  { icon: "css", title: "CSS", value: 63 },
  { icon: "javascript", title: "JavaScript", value: 75 },
  { icon: "html", title: "HTML", value: 60 },
  { icon: "css", title: "CSS", value: 80 },
  { icon: "javascript", title: "JavaScript", value: 95 },
];
export const SERVICES = [
  {
    title: "Billing Software",
    description:
      "Smart billing software for fast, accurate, and hassle-free invoicing.Boost efficiency, eliminate errors, and get paid faster.",
    icon: ShoppingBagOutlined,
  },
  {
    title: "Billing Software",
    description:
      "Smart billing software for fast, accurate, and hassle-free invoicing.Boost efficiency, eliminate errors, and get paid faster.",
    icon: ShoppingBagOutlined,
  },
  {
    title: "Billing Software",
    description:
      "Smart billing software for fast, accurate, and hassle-free invoicing.Boost efficiency, eliminate errors, and get paid faster.",
    icon: ShoppingBagOutlined,
  },
  {
    title: "Billing Software",
    description:
      "Smart billing software for fast, accurate, and hassle-free invoicing.Boost efficiency, eliminate errors, and get paid faster.",
    icon: ShoppingBagOutlined,
  },
  {
    title: "Billing Software",
    description:
      "Smart billing software for fast, accurate, and hassle-free invoicing.Boost efficiency, eliminate errors, and get paid faster.",
    icon: ShoppingBagOutlined,
  },
  {
    title: "Billing Software",
    description:
      "Smart billing software for fast, accurate, and hassle-free invoicing.Boost efficiency, eliminate errors, and get paid faster.",
    icon: ShoppingBagOutlined,
  },
];
export const SOCIAL_MEDIA = [
  {
    id: "mail", icon: <Mail />, onClick: () => {
      window.open(
        "mailto:balajiaravind99@gmail.com",
        "_blank"
      );
    }
  },
  {
    id: "linkedin", icon: <LinkedIn />, onClick: () => {
      window.open(
        "https://www.linkedin.com/in/aravind-balaji99",
        "_blank"
      );
    }
  },
  {
    id: "github", icon: <GitHub />, onClick: () => {
      window.open(
        "https://www.github.com/aravind-balaji-28",
        "_blank"
      );
    }
  },
  { id: "instagram", icon: <Instagram />, onClick: () => {
      window.open(
        "https://www.instagram.com/aravind_balaji__",
        "_blank"
      );
  } },
];
export const HIGHLIGHTS = [
  { value: "4+", label: "Experiences" },
  { value: "4+", label: "Project done" },
  { value: "5+", label: "Happy Clients" },
];