"user client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { mainLinks } from "@/constants"; 



const MobileNav = () => {
    const { pathname } = useLocation();

  return (
    <section className="">
    <Sheet>
      <SheetTrigger>
        <img
          src="/icons/menu.svg"
          width={30}
          height={30}
          alt="menu"
          className="cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none bg-slate-800 py-10">
        <Link
          to="/"
          className="flex cursor-pointer items-center gap-1 pb-10 pl-4"
        >
          <img
            src="/icons/logo.svg"
            width={24}
            height={27}
            alt="logo"
            className="dark:invert"
          />
          <span className="text-xl font-extrabold text-white ml-2">
            FetchIt
          </span>
        </Link>
        <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <nav className="flex h-full  flex-col gap-6 text-stone-200">
              {mainLinks.map(({ route, label, imgUrl }) => {
                const isActive =
                  pathname === route || pathname.startsWith(`${route}/`);

                return (
                  <SheetClose asChild key={route}>
                    <Link
                      to={route}
                      className={cn(
                        "flex gap-3 items-center py-4 xl:px-4 justify-start",
                        {
                          "border-r-4 border-blue-400": isActive,
                        }
                      )}
                    >
                      <img
                        src={imgUrl}
                        alt={label}
                        width={24}
                        height={24}
                      />
                      <p>{label}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  </section>
  )
}

export default MobileNav
