import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://github.com/nisabmohd/Aria-Docs"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
      Best GitHub Repositories Directory
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
      Best Of Git Is Directory Listing GitHub Repositories By Language, Frameworks And Purpose. Our Lists Ranked By Must Forked And Reviewed On GitHub.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href="/repositories"
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Explore Repositories
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>
      </div>
    </div>
  );
}
