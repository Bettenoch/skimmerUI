import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Features as FeaturesArray } from "@/constants";

export function Benefits() {
  return (
    <Carousel className=" max-w-64 md:max-w-full overflow-x-hidden">
      <CarouselContent className="p-4 md:p-6 lg:p-8">
        {FeaturesArray.map((item, index) => (
          <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4 md:pl-8">
            <article
              key={item.id}
              className="bg-[#071330] flex flex-col  w-full h-full rounded-t-md rounded-br-2xl"
            >
              <div className="max-w-md flex flex-col items-center p-2 md:p-4">
                <h2 className="text-3xl text-[#996515] font-semibold text-center">{item.headline}</h2>
                <div className="p-4">
                    <img src={item.icon} className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" alt="icon" />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center">
                    <p className="py-4 md:py-6 lg:py-8 font-light text-stone-100">{item.description.text}</p>
                </div>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
