"use client";
import { useState } from "react";
import Image from "next/image";
import { Instagram, LinkedIn, GitHub, Mail, ShoppingBagOutlined } from '@mui/icons-material';
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";
import { ProgressBar } from "./components/ProgressBar";
import { Tabs } from "./components/Tabs";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { SectionHeading } from "./components/SectionHeading";
const NAV_ITEMS = ["Home", "Services", "About me", "Portfolio", "Contact me"];
const skills = [
  { icon: "html", title: "HTML", value: 88 },
  { icon: "css", title: "CSS", value: 63 },
  { icon: "javascript", title: "JavaScript", value: 75 },
  { icon: "html", title: "HTML", value: 60 },
  { icon: "css", title: "CSS", value: 80 },
  { icon: "javascript", title: "JavaScript", value: 95 },
];
const MailSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 6L12 13L2 6" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  )
}
const PhoneSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.9201V19.9201C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.9201C16.7428 21.5857 13.787 20.5342 11.19 18.8501C8.77382 17.3148 6.72533 15.2663 5.18999 12.8501C3.49997 10.2413 2.44824 7.27109 2.11999 4.1801C2.095 3.90356 2.12787 3.62486 2.21649 3.36172C2.30512 3.09859 2.44756 2.85679 2.63476 2.65172C2.82196 2.44665 3.0498 2.28281 3.30379 2.17062C3.55777 2.05843 3.83233 2.00036 4.10999 2.0001H7.10999C7.5953 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04207 3.23954 9.10999 3.7201C9.23662 4.68016 9.47144 5.62282 9.80999 6.5301C9.94454 6.88802 9.97366 7.27701 9.8939 7.65098C9.81415 8.02494 9.62886 8.36821 9.35999 8.6401L8.08999 9.9101C9.51355 12.4136 11.5864 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9751 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5286 19.3199 14.7635 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.9201Z" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  )
}
const DownloadSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.0002 12.791L10.0002 0.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9162 9.86331L10.0002 12.7913L7.0842 9.86331"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.633 5.48291H15.566C17.601 5.48291 19.25 7.13191 19.25 9.16791V14.0519C19.25 16.0819 17.605 17.7269 15.575 17.7269L4.435 17.7269C2.4 17.7269 0.75 16.0769 0.75 14.0419V9.15691C0.75 7.12791 2.396 5.48291 4.425 5.48291H5.367"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
interface InfoCardProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}
const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  text,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-[14px] ${className}`}>
      {icon}
      <Typography variant="h6" className="text-[var(--white-dark-hover)]">
        {text}
      </Typography>
    </div>
  );
};
const services = [
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
const socialButtons = [
  { id: "mail", icon: <Mail />, onClick: () => { } },
  { id: "linkedin", icon: <LinkedIn />, onClick: () => { } },
  { id: "github", icon: <GitHub />, onClick: () => { } },
  { id: "instagram", icon: <Instagram />, onClick: () => { } },
];
const stats = [
  { value: "4+", label: "Experiences" },
  { value: "4+", label: "Project done" },
  { value: "5+", label: "Happy Clients" },
];
export default function Page() {
  const [active, setActive] = useState("Home");
  const RenderHirMe = (): React.JSX.Element => {
    return <Button
      borderRadius="corner"
      color="primary"
      size="lg"
      text="Hire Me"
      variant="filled"
      className="px-[1rem] py-[0.5rem] xl:px-[2.5rem] xl:py-[0.75rem]"
    />
  }
  const Logo = (): React.JSX.Element => {
    return <Image src="/img/logo.svg" alt="Logo" width={80} height={100}
      className="w-[64px] md:w-[80px] absolute left-1/2 -translate-x-1/2 xl:static xl:translate-x-0"
    />
  }

  const NavLink = (): React.JSX.Element => {
    return <div className="hidden xl:flex items-center gap-[3.75rem]">
      {NAV_ITEMS.map((item) => (
        <Typography
          key={item}
          variant="h6"
          as="button"
          onClick={() => setActive(item)}
          className={
            active === item
              ? "text-[var(--orange-normal)] font-semibold"
              : "text-[var(--white-dark-hover)] hover:text-white cursor-pointer"
          }
        >
          {item}
        </Typography>
      ))}
    </div>
  }
  const SocialMediaIcons = (): React.JSX.Element => {
    return <div className="inline-flex gap-[1.25rem]">
      {socialButtons.map(({ id, icon, onClick }) => (
        <Button
          key={id}
          borderRadius="rounded"
          color="dark"
          icon={icon}
          iconPosition="left"
          isIconOnly
          onClick={onClick}
          size="md"
          type="button"
          variant="filled"
          className="bg-[var(--dark-grey)] border-[0.063rem] border-[var(--white-darker)]"
        />
      ))}
    </div>
  }
  return (
    <div className="landing-page bg-[#121212] w-full pt-14 flex flex-col gap-[60px] xl:gap-[150px]">
      <header className="header flex justify-between items-center px-6 md:px-10 xl:px-20 bg-transparent">
        <button className="block xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Logo />
        <NavLink />
        <RenderHirMe />
      </header>
      <div className="body flex flex-col gap-[9.375rem] px-20 pt-[1.875rem]">
        {/* Profile Section */}
        <div className="profile flex flex-col xl:flex-row justify-between items-center gap-[4rem] xl:gap-0">

          <div className="profile__left w-full flex flex-col items-center xl:items-start text-center xl:text-left">
            <div className="flex flex-col gap-[5rem]">
              <div className="flex flex-col gap-[3.75rem]">
                <div className="flex flex-col gap-[1.5rem]">
                  <div className="flex flex-col">
                    <Typography variant="h5" className="text-lg md:text-xl !text-[var(--white-dark-active)]">
                      Hi I am
                    </Typography>
                    <Typography variant="h4" className="text-lg md:text-xl !text-[var(--white-dark-hover)]">
                      Aravind Balaji G.V
                    </Typography>
                  </div>
                  <Typography variant="h1"
                    className="bg-[linear-gradient(160deg,rgba(152,67,0,0)_0%,rgba(253,111,0,1)_38%,rgba(202,89,0,1)_100%)]
  bg-clip-text text-transparent
  text-[2.5rem] md:text-[3.5rem] xl:text-[4.375rem]
  font-black tracking-[0.131rem]
  whitespace-normal xl:whitespace-nowrap">
                    Mern Stack Developer
                  </Typography>
                  <div className="inline-flex justify-center xl:justify-start gap-[1.25rem]">
                    <SocialMediaIcons />
                  </div>
                </div>
                <div className="flex justify-center xl:justify-start gap-[1.5rem]">
                  <RenderHirMe />
                  <Button
                    borderRadius="corner"
                    color="white"
                    iconPosition="left"
                    onClick={() => { }}
                    size="lg"
                    text="Download CV"
                    type="button"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="flex gap-[1.875rem] p-[16px] xl:p-[1.5rem] bg-[var(--dark-grey)] w-full max-w-max rounded-[0.5rem]">
                {stats.map((item, index) => {
                  const isLast = index === stats.length - 1;
                  return (
                    <div
                      key={index}
                      className={[
                        "flex flex-col items-center gap-[0.75rem]",
                        !isLast &&
                        "border-r-2 border-[var(--white-dark-hover)] pr-[1.875rem]",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <Typography variant="h5" className="max-xl:text-[20px] text-[var(--orange-normal)]">
                        {item.value}
                      </Typography>
                      <Typography variant="h6" className="max-xl:text-[16px] text-[var(--white-normal)]">
                        {item.label}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="profile__right flex justify-center xl:justify-end w-full mt-8 xl:mt-0">
            <div
              className="
      relative flex items-center justify-center
      bg-[var(--dark-grey)] rounded-full
      w-[16rem] h-[16rem]
      sm:w-[20rem] sm:h-[20rem]
      md:w-[24rem] md:h-[24rem]
      xl:w-[30rem] xl:h-[30rem]
    "
            >
              <div
                className="
        absolute left-[0.5rem] bottom-0
        w-[88%] sm:w-[92%] md:w-[95%] xl:w-full
      "
              >
                <Image
                  className="w-full h-full rounded-full object-cover grayscale"
                  src="/img/profile-img.png"
                  alt="Profile image"
                  width={300}
                  height={200}
                  priority
                />
              </div>
            </div>
          </div>

        </div>
        {/* Service Section */}
        <div className="service flex flex-col items-center justify-center gap-[3rem] sm:gap-[4rem] xl:gap-[80px]">
          <SectionHeading
            title="Services"
            description="Building secure, scalable, and high-performance web applications with modern technologies."
          />

          <div
            className="
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-[1.5rem] sm:gap-[2rem] xl:gap-[2.125rem]
      place-items-center
      w-full
    "
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
            flex flex-col items-center justify-between
            gap-[1.5rem] sm:gap-[2.125rem]
            bg-[var(--dark-grey)]
            rounded-[1.25rem] sm:rounded-[1.5rem]
            p-[1.5rem] sm:p-[2.125rem]
            w-full
            max-w-full sm:max-w-[24.979rem]
            h-full
          "
                >
                  <div className="flex flex-col items-center gap-[0.75rem] sm:gap-[1rem]">
                    <Icon className="w-[3rem] sm:w-[3.642rem] h-auto" />

                    <Typography
                      variant="h5"
                      className="text-[var(--orange-normal)] text-center"
                    >
                      {service.title}
                    </Typography>
                  </div>

                  <Typography
                    variant="h6"
                    title={service.description}
                    className="text-[var(--white-darker)] text-center line-clamp-3"
                  >
                    {service.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>

        {/* About Me Section */}
        <div className="about flex flex-col items-center justify-center gap-[3rem] sm:gap-[4rem] xl:gap-[80px]">
          {/* Section Heading */}
          <SectionHeading
            className="about__heading text-center xl:text-left"
            title="About Me"
            description="MERN stack developer with 4 years of experience building scalable, full-stack web applications."
          />

          {/* Content */}
          <div className="about__content flex flex-col xl:flex-row items-center gap-[3rem] sm:gap-[4rem] xl:gap-[6.25rem] w-full">
            {/* LEFT IMAGE */}
            <div className="about__content__left flex justify-center w-full xl:w-auto">
              <div
                className="
          relative flex items-center justify-center
          bg-[var(--dark-grey)]
          w-[16rem] h-[22rem]
          sm:w-[20rem] sm:h-[28rem]
          md:w-[24rem] md:h-[32rem]
          xl:w-[30rem] xl:h-[40rem]
          rounded-t-[50%]
          rounded-b-[0.625rem]
          [border-top-left-radius:50%_35%]
          [border-top-right-radius:50%_35%]
        "
              >
                <div className="absolute inset-x-0 bottom-0 w-full h-full">
                  <Image
                    className="w-full h-full object-cover grayscale"
                    src="/img/profile-img.png"
                    alt="Profile image"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="about__content__right flex flex-col gap-[2rem] sm:gap-[2.5rem] items-center xl:items-start text-center xl:text-left w-full">
              <Typography
                variant="h6"
                className="text-[var(--white-dark-hover)] leading-[1.9] tracking-normal"
              >
                I’m Aravind Balaji G.V, a Full Stack Developer with a passion for building
                comprehensive web applications. I specialize in both front-end and
                back-end development, creating responsive user interfaces, managing
                server-side logic, and working with databases to deliver seamless,
                efficient solutions. Previously, I worked with service-based companies,
                and currently, I’m focusing on developing scalable and high-performance
                web applications in a product-based company. My skill set includes
                technologies such as React, Node.js, Express, MongoDB, and more, and I’m
                dedicated to staying at the forefront of industry trends to continuously
                deliver impactful, user-centric solutions.
              </Typography>

              <Button
                borderRadius="corner"
                color="primary"
                icon={<DownloadSvg />}
                className="max-w-max tracking-[0.03em]"
                iconPosition="left"
                onClick={() => { }}
                size="md"
                text="Download CV"
                type="button"
                variant="filled"
              />
            </div>
          </div>

          {/* SKILLS */}
          <div className="skills flex gap-[2.5rem] sm:gap-[4rem] xl:gap-[7rem] flex-wrap justify-center xl:justify-start">
            {skills.map((skill, index) => (
              <ProgressBar
                key={`${skill.title}-${index}`}
                className="dark"
                icon={skill.icon}
                title={skill.title}
                value={skill.value}
              />
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="portfolio flex flex-col items-center justify-center gap-[2.5rem] sm:gap-[3.5rem] xl:gap-[70px]">

          {/* Heading + Tabs */}
          <div className="flex flex-col gap-[1.5rem] sm:gap-[2.5rem] items-center xl:items-start">
            <SectionHeading className="portfolio__heading text-center xl:text-left" title="Portfolio" />

            <div className="w-full overflow-x-auto xl:overflow-visible">
              <Tabs
                className="flex gap-[1rem] min-w-max justify-center xl:justify-start"
                tabs={[
                  { id: 1, label: "All" },
                  { id: 2, label: "Ecommerce" },
                  { id: 3, label: "Crypto & DeFi" },
                ]}
              />
            </div>
          </div>

          {/* Portfolio Cards */}
          <div
            className="
      flex w-full
      gap-[1.25rem] sm:gap-[2rem]
      justify-center
      flex-wrap
    "
          >
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[415px]"
              >
                {/* Image */}
                <div
                  className="
            w-full
            min-h-[220px]
            sm:min-h-[280px]
            md:min-h-[340px]
            lg:min-h-[415px]
            bg-[url('/img/Rectangle-test.png')]
            bg-cover bg-center
            rounded-t-[0.625rem]
          "
                />

                {/* Title */}
                <div className="flex bg-[#ffffff14] p-[0.75rem] sm:p-[1rem] rounded-b-[0.625rem] w-full">
                  <Typography
                    variant="body"
                    className="text-[var(--white-normal-active)] text-sm sm:text-base"
                  >
                    WonderSoft
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact flex flex-col items-center justify-center gap-[2.5rem] sm:gap-[3rem] xl:gap-[50px]">
          <SectionHeading
            className="contact__heading text-center xl:text-left"
            title="Contact Me"
            description="Let’s Connect — Feel Free to Reach Out"
          />

          <div className="flex flex-col w-full max-w-[1012px] gap-[1.5rem] sm:gap-[2rem] xl:gap-[30px]">

            {/* Name + Email */}
            <div className="flex flex-col sm:flex-row w-full gap-[1.25rem] sm:gap-[30px]">
              <Input
                id="name_id"
                label="Name"
                variant="outlined"
              />
              <Input
                id="email_id"
                label="Email"
                variant="outlined"
              />
            </div>

            {/* Phone + Service */}
            <div className="flex flex-col sm:flex-row w-full gap-[1.25rem] sm:gap-[30px]">
              <Input
                id="phone_number_id"
                label="Phone Number"
                variant="outlined"
              />
              <Select
                label="Service of Interest"
                onChange={() => { }}
                options={[
                  { label: "Mern Stack Developer", value: "Mern Stack Developer" },
                  { label: "Frontend Developer", value: "Frontend Developer" },
                  { label: "Backend Developer", value: "Backend Developer" },
                ]}
                value=""
                variant="outlined"
              />
            </div>

            {/* Subject + Description */}
            <div className="flex flex-col sm:flex-row w-full gap-[1.25rem] sm:gap-[30px] items-start">
              <Input
                id="subject_id"
                label="Subject"
                variant="outlined"
              />
              <Input
                id="project_description_id"
                label="Project Description"
                multiline
                rows={8}
                variant="outlined"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center xl:justify-end w-full">
              <Button
                borderRadius="corner"
                color="white"
                iconPosition="left"
                onClick={() => { }}
                size="lg"
                text="Send"
                type="button"
                variant="outlined"
              />
            </div>
          </div>
        </div>

      </div>
      <footer
        className="
    footer
    flex flex-col items-center
    gap-[2rem] sm:gap-[3rem] xl:gap-[50px]
    bg-[var(--dark-grey)]
    px-[1rem] py-[2.5rem]
    sm:px-[2.5rem] sm:py-[3.75rem]
    xl:p-[80px]
    text-center
  "
      >
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <NavLink />

        {/* Social Icons */}
        <SocialMediaIcons />

        {/* Contact Info */}
        <div
          className="
      flex flex-col sm:flex-row
      items-center
      gap-[1.25rem] sm:gap-[40px]
    "
        >
          <InfoCard
            icon={<MailSvg />}
            text="balajiaravind99@gmail.com"
          />

          <InfoCard
            icon={<PhoneSvg />}
            text="+91 6381127676"
          />
        </div>
      </footer>

    </div>
  );
}
