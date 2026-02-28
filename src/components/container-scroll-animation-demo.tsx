import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { getHapyjoImage } from "@/lib/hapyjo-images";
import { IMAGE_ALLOCATION } from "@/lib/image-allocation";

const heroImage = getHapyjoImage(IMAGE_ALLOCATION.hero);

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        {heroImage ? (
          <img
            src={heroImage}
            alt="Hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        ) : (
          <div className="mx-auto h-full w-full rounded-2xl bg-muted object-cover object-left-top" />
        )}
      </ContainerScroll>
    </div>
  );
}
