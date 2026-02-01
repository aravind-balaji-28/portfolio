"use client";
import { Instagram, LinkedIn, GitHub, Mail, ShoppingBagOutlined, CurrencyExchange, StorefrontOutlined } from '@mui/icons-material';
import { BootstrapSvg,  GitHubSvg, GitLabSvg, GitSvg, MaterialSvg,  MongodbSvg,  MySQLSvg, NodejsSvg, NpmSvg, PostgresSQLSvg,  ReactSvg ,RedisSvg,ReduxSvg, SassSvg} from './Icons/SVG';
export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About me", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact me", id: "contact" },
];
export const SKILLS = [
  { icon: "html", title: "HTML", value: 88 },
  { icon: "css", title: "CSS", value: 85 },
  { icon: <SassSvg/>, title: "Sass", value: 95 },
  { icon: <MaterialSvg/>, title: "Material", value: 70 },
  { icon: <BootstrapSvg />, title: "Bootstrap", value: 90 },
  { icon: "javascript", title: "JavaScript", value: 75 },  
  { icon: <ReactSvg />, title: "React", value: 80 },
  { icon: <ReduxSvg/>, title: "Redux", value: 80 },
  { icon: <NodejsSvg/>, title: "Nodejs", value: 95 },
  { icon: <MongodbSvg/>, title: "MongoDb", value: 95 },
  { icon: <MySQLSvg/>, title: "MySQL", value: 80 },
  { icon: <PostgresSQLSvg/>, title: "PostgresSQL", value: 60 },
  { icon: <RedisSvg/>, title: "Redis", value: 65 },
  { icon: <NpmSvg/>, title: "Npm", value: 85 },
  { icon: <GitSvg/>, title: "Git", value: 90 },
  { icon: <GitHubSvg/>, title: "GitHub", value: 85 },
  { icon: <GitLabSvg/>, title: "GitLab", value: 80 },
   
];


export const SERVICES = [
  {
    title: "Billing Software",
    description:
      "Smart billing software for fast, accurate, and hassle-free invoicing.Boost efficiency, eliminate errors, and get paid faster.",
    icon: ShoppingBagOutlined,
  },
  {
    title: "Marketplace Platform  ",
    description:
      "A full-stack e-commerce marketplace connecting buyers and sellers on a single platform, featuring secure product listings, efficient order management, and a seamless checkout experience designed for scalability.",
    icon: StorefrontOutlined,
  },
  {
    title: "Crypto Exchange",
    description:
      "Trade cryptocurrencies instantly with high liquidity, advanced security, and a seamless user experience built for speed and trust.",
    icon: CurrencyExchange,
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
  {
    id: "instagram", icon: <Instagram />, onClick: () => {
      window.open(
        "https://www.instagram.com/aravind_balaji__",
        "_blank"
      );
    }
  },
];
export const HIGHLIGHTS = [
  { value: "4+", label: "Experiences" },
  { value: "4+", label: "Project done" },
  { value: "5+", label: "Happy Clients" },
];