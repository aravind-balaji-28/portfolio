"use client";
import { useState } from "react";
import Image from "next/image";
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";
import { ProgressBar } from "./components/ProgressBar";
import { Tabs } from "./components/Tabs";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { SectionHeading } from "./components/SectionHeading";
import { DownloadSvg, MailSvg, PhoneSvg } from "./Icons/SVG";
import { NAV_ITEMS, SERVICES, SKILLS, SOCIAL_MEDIA, HIGHLIGHTS } from "./data";

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
export default function Page() {
  const [active, setActive] = useState("Home");
  const RenderHirMe = (): React.JSX.Element => {
    return <Button
      borderRadius="corner"
      color="primary"
      size="lg"
      text="Hire Me"
      variant="filled"
      className="px-[1rem] py-[0.5rem] md:px-[1.75rem] md:py-[0.625rem] lg:px-[2.5rem] lg:py-[0.75rem]"
    />
  }
  const Logo = (): React.JSX.Element => {
    return <Image src="/img/logo.svg" alt="Logo" width={80} height={100}
      className="w-[64px] md:w-[72px] lg:w-[80px]"
    />
  }
  const NavLink = (): React.JSX.Element => {
    return <div className="header__links hidden lg:flex items-center gap-[3.75rem]">
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
      {SOCIAL_MEDIA.map(({ id, icon, onClick }) => (
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

    <div className="landing-page bg-[#121212] w-full flex flex-col gap-[60px] pt-[28px] md:gap-[80px] md:pt-[42px] lg:gap-[150px] lg:pt-[56px]">
      <header className="header flex justify-between items-center px-[16px] md:px-[40px] lg:px-[80px]">
        <button className="header__btn--expand block lg:hidden">
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
      <div className="body flex flex-col gap-[100px] px-[16px] md:gap-[120px] md:px-[40px] lg:gap-[150px] lg:px-[80px] w-full">
        {/* Profile Section pending */}
        <div className="profile flex flex-col gap-[100px] md:gap-[130px] lg:gap-0 lg:flex-row justify-between items-center w-full">
          <div className="profile__left flex flex-col gap-[50px] md:gap-[65px] lg:gap-[80px] w-full items-center lg:items-start">
            <div className="flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px] w-full">
              <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] w-full">
                <div className="flex flex-col gap-[10px] items-center lg:items-start w-full">
                  <Typography variant="h5" className="!text-[var(--white-dark-active)] text-base md:text-xl lg:text-2xl">
                    Hi I am
                  </Typography>
                  <Typography variant="h4" className="!text-[var(--white-dark-hover)] text-xl md:text-2xl lg:text-[28px]">
                    Aravind Balaji G.V
                  </Typography>
                </div>
                <Typography variant="h1"
                  className="bg-[linear-gradient(160deg,rgba(152,67,0,0)_0%,rgba(253,111,0,1)_38%,rgba(202,89,0,1)_100%)] bg-clip-text text-transparent text-[3.125rem] md:text-[3.75rem] lg:text-[4.375rem]
 font-black tracking-[0.131rem] leading-tight break-words whitespace-normal text-center lg:break-normal lg:whitespace-nowrap lg:text-left">
                  Mern Stack Developer
                </Typography>
                <div className="flex gap-[1.25rem] justify-center lg:justify-start">
                  <SocialMediaIcons />
                </div>
              </div>
              <div className="flex gap-[1.5rem] justify-center lg:justify-start">
                <RenderHirMe />
                <Button
                  borderRadius="corner"
                  color="white"
                  iconPosition="left"
                  onClick={() => { }}
                  size="lg"
                  text="Download CV"
                  type="button"
                  className="px-[1rem] py-[0.5rem] md:px-[1.75rem] md:py-[0.625rem] lg:px-[2.5rem] lg:py-[0.75rem]"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="flex gap-[14px] md:gap-[22px] lg:gap-[30px] p-[16px] md:p-[20px] lg:p-[1.5rem] bg-[var(--dark-grey)] w-full max-w-max rounded-[0.5rem] justify-center lg:justify-start">
              {HIGHLIGHTS.map((item, index) => {
                const isLast = index === HIGHLIGHTS.length - 1;
                return (
                  <div
                    key={index}
                    className={[
                      "flex flex-col items-center gap-[0.75rem] w-full",
                      !isLast &&
                      "border-r-2 border-[var(--white-dark-hover)] pr-[14px] md:pr-[22px] lg:pr-[1.875rem]",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <Typography variant="h5" className="leading-normal text-[var(--orange-normal)] text-[20px] md:text-[22px] lg:text-[24px]"
                    >
                      {item.value}
                    </Typography>
                    <Typography variant="h6" className="leading-normal text-[var(--white-normal)] text-[16px] md:text-[18px] lg:text-[20px] whitespace-nowrap
                      ">
                      {item.label}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="profile__right flex items-center justify-center w-full">
            <div className="relative flex items-center justify-center bg-[var(--dark-grey)] rounded-full w-[320px] h-[320px] md:w-[410px] md:h-[410px] lg:w-[480px] lg:h-[480px]">
              <div className="absolute bottom-[0] w-full">
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[22px] lg:gap-[34px] place-items-stretch">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-[16px] md:gap-[24px] lg:gap-[34px]
                   bg-[var(--dark-grey)] rounded-[16px] md:rounded-[22px] lg:rounded-[24px] p-[22px] lg:p-[32px] lg:p-[34px]
                   w-full max-w-[24.979rem]"
                >
                  <div className="flex flex-col items-center gap-[8px] md:gap-[12px] lg:gap-[16px]">
                    <Icon className="!w-[34px] md:!w-[46px] lg:!w-[58px] !h-auto" />
                    <Typography variant="h5" className="text-[var(--orange-normal)] text-center text-[20px] md:text-[22px] lg:text-[24px] leading-normal">
                      {service.title}
                    </Typography>
                  </div>
                  <Typography
                    variant="h6"
                    title={service.description}
                    className="text-[var(--white-darker)] text-center line-clamp-2 md:line-clamp-3 lg:line-clamp-3 text-[16px] md:text-[18px] lg:text-[20px] leading-normal"
                  >
                    {service.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
        {/* About Me Section */}
        {/* <div className="about flex flex-col items-center justify-center gap-[80px]">
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
            {SKILLS.map((skill, index) => (
              <ProgressBar
                key={`${skill.title}-${index}`}
                className="dark"
                icon={skill.icon}
                title={skill.title}
                value={skill.value}
              />
            ))}
          </div>
        </div> */}
        {/* Portfolio Section */}
        {/* <div className="portfolio flex flex-col items-center justify-center gap-[70px]">
          <div className="flex flex-col gap-[40px]">
            <SectionHeading className='portfolio__heading' title="Portfolio" />
            <Tabs
              className=""
              tabs={[
                {
                  id: 1,
                  label: 'All'
                },
                {
                  id: 2,
                  label: 'Ecommerce'
                },
                {
                  id: 3,
                  label: 'Crypto & DeFi'
                },
              ]}
            />
          </div>
          <div className="flex w-full gap-[2rem] justify-center flex-wrap">
            <div className="flex flex-col items-center w-full max-w-[415px]">
              <div className="w-full min-h-[300px] md:min-h-[380px] lg:min-h-[415px]  bg-[url('/img/Rectangle-test.png')] bg-cover bg-center rounded-t-[0.625rem]">
              </div>
              <div className="flex bg-[#ffffff14] p-[16px] rounded-b-[0.625rem] w-full">
                <Typography variant="body" className="text-[var(--white-normal-active)]">
                  WonderSoft
                </Typography>
              </div>
            </div>
            <div className="flex flex-col items-center w-full max-w-[415px]">
              <div className="w-full min-h-[300px] md:min-h-[380px] lg:min-h-[415px]  bg-[url('/img/Rectangle-test.png')] bg-cover bg-center rounded-t-[0.625rem]">
              </div>
              <div className="flex bg-[#ffffff14] p-[16px] rounded-b-[0.625rem] w-full">
                <Typography variant="body" className="text-[var(--white-normal-active)]">
                  WonderSoft
                </Typography>
              </div>
            </div>
          </div>
        </div> */}
        {/* Contact Section */}
        {/* <div className="contact flex flex-col items-center justify-center gap-[50px]">
          <SectionHeading className='contact__heading' title="Contact Me" description="Let’s Connect — Feel Free to Reach Out" />
          <div className="flex flex-col w-full max-w-[1012px] gap-[30px]">
            <div className="flex w-full gap-[30px]">
              <Input
                className=""
                id="name_id"
                label="Name"
                variant="outlined"
              />
              <Input
                className=""
                id="email_id"
                label="Email"
                variant="outlined"
              />
            </div>
            <div className="flex w-full gap-[30px]">
              <Input
                className=""
                id="phone_number_id"
                label="Phone Number"
                variant="outlined"
              />
              <Select
                label="Service of Interest"
                onChange={() => { }}
                options={[
                  {
                    label: 'Mern Stack Developer',
                    value: 'Mern Stack Developer'
                  },
                  {
                    label: 'Frontend Developer',
                    value: 'Frontend Developer'
                  },
                  {
                    label: 'Backend Developer',
                    value: 'Backend Developer'
                  }
                ]}
                value=""
                variant="outlined"
              />
            </div>
            <div className="flex w-full gap-[30px] items-start">
              <Input
                className=""
                id="phone_number_id"
                label="Phone Number"
                variant="outlined"
              />
              <Input
                className=""
                id="project_description_id"
                label="Project Description"
                multiline
                rows={8}
                variant="outlined"
              />
            </div>
            <div className="flex justify-end w-full">
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
        </div> */}
      </div>
      {/* <footer className="footer flex flex-col items-center gap-[50px] bg-[var(--dark-grey)] p-[80px]">
        <Logo />
        <NavLink />
        <SocialMediaIcons />
        <div className="flex gap-[40px]">
          <InfoCard
            icon={<MailSvg />}
            text="balajiaravind99@gmail.com"
          />
          <InfoCard
            icon={<PhoneSvg />}
            text="+91 6381127676"
          />
        </div>
      </footer> */}
    </div>
  );
}
