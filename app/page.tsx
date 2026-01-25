"use client";
import { useState } from "react";
import Image from "next/image";
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";
import { Instagram, LinkedIn, GitHub, Mail, ShoppingBagOutlined } from '@mui/icons-material';
import SectionHeading from "./components/SectionHeading";
import { ProgressBar } from "./components/ProgressBar";
const NAV_ITEMS = ["Home", "Services", "About me", "Portfolio", "Contact me"];

const skills = [
  { icon: "html", title: "HTML", value: 88 },
  { icon: "css", title: "CSS", value: 63 },
  { icon: "javascript", title: "JavaScript", value: 75 },
  { icon: "html", title: "HTML", value: 60 },
  { icon: "css", title: "CSS", value: 80 },
  { icon: "javascript", title: "JavaScript", value: 95 },
];

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
    />
  }
  return (
    <div className="landing-page bg-[#121212] w-full pt-14">
      <div className="header flex justify-between items-center px-20">
        <Image src="/img/logo.svg" alt="Logo" width={80} height={100} />
        <div className="flex items-center gap-[3.75rem]">
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
        <RenderHirMe />
      </div>
      <div className="body flex flex-col gap-[9.375rem] px-20 pt-[1.875rem]">
        {/* Profile Section */}
        <div className="profile flex justify-between items-center mt-[7rem]">
          <div className="profile__left">
            <div className="flex flex-col gap-[5rem]">
              <div className="flex flex-col gap-[3.75rem]">
                <div className="flex flex-col gap-[1.5rem]">
                  <div className="flex flex-col">
                    <Typography variant="h5" className=" !text-[var(--white-dark-active)]">
                      Hi I am
                    </Typography>
                    <Typography variant="h4" className="!text-[var(--white-dark-hover)]">
                      Aravind Balaji G.V
                    </Typography>
                  </div>
                  <Typography variant="h1"
                    className="bg-[linear-gradient(160deg,rgba(152,67,0,0)_0%,rgba(253,111,0,1)_38%,rgba(202,89,0,1)_100%)] bg-clip-text text-transparent text-[4.375rem] font-black tracking-[0.131rem] leading-normal whitespace-nowrap">
                    Mern Stack Developer
                  </Typography>
                  <div className="inline-flex gap-[1.25rem]">
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
                </div>
                <div className="flex gap-[1.5rem]">
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
              <div className="flex gap-[1.875rem] p-[1.5rem] bg-[var(--dark-grey)] w-full max-w-max rounded-[0.5rem]">
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
                      <Typography variant="h5" className="text-[var(--orange-normal)]">
                        {item.value}
                      </Typography>

                      <Typography variant="h6" className="text-[var(--white-normal)]">
                        {item.label}
                      </Typography>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
          <div className="profile__right">
            <div className="relative flex items-center justify-center bg-[var(--dark-grey)] rounded-full w-[30rem] h-[30rem]">
              <div className="absolute left-[0.625rem] bottom-[0] w-full">
                <Image className="w-full h-full rounded-full object-cover grayscale" src="/img/profile-img.png" alt="Logo" width={300}
                  height={200}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Service Section */}
        <div className="service flex flex-col items-center justify-center gap-[80px]">
          <SectionHeading title="Services" description="Building secure, scalable, and high-performance web applications with modern technologies." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.125rem] place-items-stretch">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center  gap-[2.125rem]
                   bg-[var(--dark-grey)] rounded-[1.5rem] p-[2.125rem]
                   w-full max-w-[24.979rem]"
                >
                  <div className="flex flex-col items-center gap-[1rem]">
                    <Icon className="!w-[3.642rem] !h-auto" />

                    <Typography variant="h5" className="text-[var(--orange-normal)]">
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

        <div className="about flex flex-col items-center justify-center gap-[80px]">
          <SectionHeading className='about__heading' title="About Me" description="MERN stack developer with 4 years of experience building scalable, full-stack web applications." />
          <div className="about__content flex gap-[6.25rem]">
            <div className="about__content__left">
              <div className="relative flex items-center justify-center bg-[var(--dark-grey)]  w-[30rem] h-[40rem] rounded-t-[50%]
         rounded-b-[0.625rem]
         [border-top-left-radius:50%_35%]
         [border-top-right-radius:50%_35%] ">
                <div className="absolute left-[0] bottom-[0] w-full">
                  <Image className="w-full h-full object-cover grayscale" src="/img/profile-img.png" alt="Logo" width={400}
                    height={200}
                  />
                </div>
              </div>


            </div> <div className="about__content__right flex flex-col gap-[2.5rem]">
              <Typography variant="h6" className="text-[var(--white-dark-hover)] leading-[1.9] tracking-normal">
                I’m Aravind Balaji G.V, a Full Stack Developer with a passion for building comprehensive web applications. I specialize in both front-end and back-end development, creating responsive user interfaces, managing server-side logic, and working with databases to deliver seamless, efficient solutions. Previously, I worked with service-based companies, and currently, I’m focusing on developing scalable and high-performance web applications in a product-based company. My skill set includes technologies such as React, Node.js, Express, MongoDB, and more, and I’m dedicated to staying at the forefront of industry trends to continuously deliver impactful, user-centric solutions.
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

            <div>

            </div>
          </div>
          <div className="skills flex gap-[7rem] flex-wrap">
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



      </div>
    </div>
  );
}
