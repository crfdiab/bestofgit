import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, CommandIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";

export const NAVLINKS = [
  {
    title: "Repositories List",
    href: `/repositories`,
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about-us",
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SheetLeftbar />
          <div className="flex items-center gap-4">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="hidden md:flex items-center gap-4">
              {NAVLINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={buttonVariants({ 
                    variant: "ghost", 
                    size: "sm",
                    className: "px-3"
                  })}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Search />
          <div className="flex items-center gap-1">
            <Link
              href="https://github.com/crfdiab/bestofgit"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              aria-label="Github"
              aria-roledescription="Link to Github repository"
            >
              <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      
      <p className="tracking-tighter text-md font-bold font-code text-muted-foreground">Best Of Git</p>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary md:font-semibold font-medium"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
