"use client";
import { useState } from "react";
import Image from "next/image";
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";
import { Instagram, LinkedIn, GitHub, Mail } from '@mui/icons-material';
const NAV_ITEMS = ["Home", "Services", "About me", "Portfolio", "Contact me"];
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
    <div className="landing-page bg-[#121212] w-full h-screen pt-14">
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
      <div className="body px-20 pt-[1.875rem]">
        <div className="profile flex justify-between items-center">
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
                        className="bg-[#ffffff0a] border-[0.063rem] border-[var(--white-darker)]"
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
              <div className="flex gap-[1.875rem] p-[1.5rem] bg-[#ffffff0a] w-full max-w-max rounded-[0.5rem]">
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
            <div className="relative flex items-center justify-center bg-[#ffffff0a] rounded-full w-[25rem] h-[25rem]">
              <div className="absolute bottom-[0] w-full">
                <Image className="w-full h-full rounded-full object-cover grayscale" src="/img/profile_img_2.png" alt="Logo" width={300}
                  height={200}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
