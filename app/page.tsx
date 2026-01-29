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
import { DownloadSvg, MailSvg, PhoneSvg, ExpandSvg } from "./Icons/SVG";
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
      <Typography variant="h6" className="text-[var(--white-dark-hover)] text-[16px] md:text-[18px] lg:text-[20px]">
        {text}
      </Typography>
    </div>
  );
};
export default function Page() {
  const [active, setActive] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
  const NavLink = ({
    isShow = false,
  }: {
    isShow?: boolean;
  }): React.JSX.Element => {
    return <div className={`header__links ${isShow ? "flex" : "hidden"} lg:flex items-center gap-[24px] md:gap-[40px] lg:gap-[60px] flex-wrap justify-center items-center`}>
      {NAV_ITEMS.map((item) => (
        <Typography
          key={item}
          variant="h6"
          as="button"
          onClick={() => setActive(item)}
          className={`text-[16px] md:text-[18px] lg:text-[20px] ${active === item
            ? "text-[var(--orange-normal)] font-semibold"
            : "text-[var(--white-dark-hover)] hover:text-white cursor-pointer"
            }`}

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

  const MobileMenu = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
    return (
      <>
        {/* Backdrop */}
        <div
          onClick={onClose}
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        />

        {/* Drawer */}
        <aside
          className={`fixed top-0 left-0 h-full w-full
  bg-[#0b0b0b] z-50 p-[24px]
  transform transition-transform duration-300 ease-out
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
`}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-[20px] right-[20px] text-white text-[22px]"
          >
            ✕
          </button>
          {/* Nav */}
          <nav className="mt-[60px] flex flex-col gap-[14px]">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item;
              return (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setTimeout(() => {
                      onClose();
                    }, 150);
                  }}
                  className={`
                  text-left px-[20px] py-[10px] rounded-full
                  text-[16px] font-medium transition
                  ${isActive
                      ? "bg-[var(--orange-normal)] text-[var(--white-normal)]"
                      : "text-[var(--white-dark-hover)]"}
                `}
                >
                  {item}
                </button>
              );
            })}
          </nav>
         
         {/* <div className="flex mt-5">
           <RenderHirMe/>
         </div> */}
        </aside>

      </>
    );
  };

  return (
    <div className="landing-page bg-[#121212] w-full flex flex-col gap-[60px] pt-[28px] md:gap-[80px] md:pt-[42px] lg:gap-[150px] lg:pt-[56px]">
      <header className="header flex justify-between items-center px-[16px] md:px-[40px] lg:px-[80px]">
        <button className="header__btn--expand block lg:hidden" onClick={() => setIsMenuOpen(true)}>
          <ExpandSvg />
        </button>
        <Logo />
        <NavLink />
        <RenderHirMe />
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <div className="body flex flex-col gap-[100px] px-[16px] md:gap-[120px] md:px-[40px] lg:gap-[150px] lg:px-[80px] w-full">
        {/* Profile Section pending */}
        <div className="profile flex flex-col gap-[100px] md:gap-[130px] xl:gap-[0]  xl:flex-row justify-between items-center w-full">
          <div className="profile__left flex flex-col gap-[50px] md:gap-[65px] lg:gap-[80px] w-full items-center xl:items-start">
            <div className="flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px] w-full">
              <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] w-full">
                <div className="flex flex-col gap-[10px] items-center xl:items-start w-full">
                  <Typography variant="h5" className="!text-[var(--white-dark-active)] text-base md:text-xl lg:text-2xl">
                    Hi I am
                  </Typography>
                  <Typography variant="h4" className="!text-[var(--white-dark-hover)] text-xl md:text-2xl lg:text-[28px]">
                    Aravind Balaji G.V
                  </Typography>
                </div>
                <Typography variant="h1"
                  className="bg-[linear-gradient(160deg,rgba(152,67,0,0)_0%,rgba(253,111,0,1)_38%,rgba(202,89,0,1)_100%)] bg-clip-text text-transparent text-[3.125rem] md:text-[3.75rem] lg:text-[4.375rem]
 font-black tracking-[0.131rem] leading-tight break-words whitespace-normal text-center lg:break-normal lg:whitespace-nowrap xl:text-left">
                  Mern Stack Developer
                </Typography>
                <div className="flex gap-[1.25rem] justify-center xl:justify-start">
                  <SocialMediaIcons />
                </div>
              </div>
              <div className="flex gap-[1.5rem] justify-center xl:justify-start">
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
        <div className="service flex flex-col items-center justify-center gap-[70px] md:gap-[75px] lg:gap-[80px]">
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
                    <Typography variant="h5" className="text-[var(--orange-normal)] text-center text-[20px] md:text-[22px] lg:text-[24px] leading-[normal] md:leading-[1.5]">
                      {service.title}
                    </Typography>
                  </div>
                  <Typography
                    variant="h6"
                    title={service.description}
                    className="text-[var(--white-darker)] text-center line-clamp-2 md:line-clamp-3 lg:line-clamp-3 text-[16px] md:text-[18px] lg:text-[20px] leading-[normal] md:leading-[1.5]"
                  >
                    {service.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
        {/* About Me Section */}
        <div className="about flex flex-col items-center justify-center gap-[70px] md:gap-[75px] lg:gap-[80px]">
          <SectionHeading className='about__heading' title="About Me" description="MERN stack developer with 4 years of experience building scalable, full-stack web applications." />
          <div className="about__content flex flex-col items-center lg:flex-row  gap-[34px] md:gap-[70px] lg:gap-[100px]">
            <div className="about__content__left">
              <div className="relative flex items-center justify-center bg-[var(--dark-grey)] w-[18rem] h-[26rem] md:w-[24rem] md:h-[32rem] lg:w-[30rem] lg:h-[40rem] rounded-b-[0.625rem] [border-top-left-radius:50%_35%] [border-top-right-radius:50%_35%]">
                <div className="absolute left-[0] bottom-[0] w-full">
                  <Image className="w-full h-full object-cover grayscale" src="/img/profile-img.png" alt="Logo" width={400}
                    height={200}
                  />
                </div>
              </div>
            </div> <div className="about__content__right flex flex-col gap-[24px] md:[gap-32px] lg:gap-[40px] items-center lg:items-start">
              <Typography variant="h6" className="text-[var(--white-dark-hover)] leading-[1.9] tracking-normal text-[16px] md:text-[18px] lg:text-[20px]">
                I’m Aravind Balaji G.V, a Full Stack Developer with a passion for building comprehensive web applications. I specialize in both front-end and back-end development, creating responsive user interfaces, managing server-side logic, and working with databases to deliver seamless, efficient solutions. Previously, I worked with service-based companies, and currently, I’m focusing on developing scalable and high-performance web applications in a product-based company. My skill set includes technologies such as React, Node.js, Express, MongoDB, and more, and I’m dedicated to staying at the forefront of industry trends to continuously deliver impactful, user-centric solutions.
              </Typography>
              <Button
                borderRadius="corner"
                color="primary"
                icon={<DownloadSvg />}
                className="max-w-max tracking-[0.03em] px-[30px] py-[12px] px-[24px] py-[10px] md:px-[28px] md:py-[11px] lg:px-[30px] lg:py-[12px]"
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
          <div className="skills flex gap-x-[40px] gap-y-[16px] justify-center lg:gap-[7rem] flex-wrap">
            {SKILLS.map((skill, index) => (
              <ProgressBar  //mobile size pending
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
        <div className="portfolio flex flex-col items-center justify-center gap-[34px] md:gap-[50px] lg:gap-[70px]">
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
            <div className="flex flex-col items-center w-full max-w-[284px] md:max-w-[330px] lg:max-w-[415px]">
              <div className="w-full min-h-[300px] md:min-h-[380px] lg:min-h-[415px]  bg-[url('/img/Rectangle-test.png')] bg-cover bg-center rounded-t-[0.625rem]">
              </div>
              <div className="flex bg-[#ffffff14] p-[16px] rounded-b-[0.625rem] w-full">
                <Typography variant="body" className="text-[var(--white-normal-active)]">
                  WonderSoft
                </Typography>
              </div>
            </div>
            <div className="flex flex-col items-center w-full max-w-[284px] md:max-w-[330px] lg:max-w-[415px]">
              <div className="w-full min-h-[300px] md:min-h-[380px] lg:min-h-[415px]  bg-[url('/img/Rectangle-test.png')] bg-cover bg-center rounded-t-[0.625rem]">
              </div>
              <div className="flex bg-[#ffffff14] p-[16px] rounded-b-[0.625rem] w-full">
                <Typography variant="body" className="text-[var(--white-normal-active)]">
                  WonderSoft
                </Typography>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div className="contact flex flex-col items-center justify-center gap-[50px]">
          <SectionHeading className='contact__heading' title="Contact Me" description="Let’s Connect — Feel Free to Reach Out" />
          <div className="flex flex-col w-full max-w-[1012px] gap-[30px]">
            <div className="flex flex-col md:flex-row lg:flex-row gap-[30px] w-full">
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
            <div className="flex flex-col md:flex-row lg:flex-row gap-[30px] w-full">
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
            <div className="flex flex-col md:flex-row lg:flex-row gap-[30px] w-full items-start">
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
            <div className="flex justify-center md:justify-end lg:justify-end w-full">
              <Button
                borderRadius="corner"
                color="white"
                iconPosition="left"
                onClick={() => { }}
                size="lg"
                text="Send"
                type="button"
                variant="outlined"
                className="px-[1.5rem] py-[0.5rem] md:px-[1.75rem] md:py-[0.625rem] lg:px-[2.5rem] lg:py-[0.75rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer flex flex-col items-center gap-[30px] md:gap-[40px] lg:gap-[50px] bg-[var(--dark-grey)] p-[80px]">
        <Logo />
        <NavLink isShow={true} />
        <SocialMediaIcons />
        <div className="flex flex-col items-center md:flex-row lg:flex-row  gap-[20px] md:gap-[30px] lg:gap-[40px]">
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
