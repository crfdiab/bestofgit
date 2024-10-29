import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | Best Of Git",
  description: "Track all updates and improvements to Best Of Git",
  alternates: {
    canonical: "/changelog",
  },
};

export default function ChangelogPage() {
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold">Changelog</h1>
        <p className="text-muted-foreground">
          Keep track of all updates and improvements to Best Of Git
        </p>
      </div>

      <div className="space-y-8">
        {/* Version 1.2.0 */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Version 1.2.0</h2>
            <span className="text-sm text-muted-foreground">March 20, 2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Added comprehensive Git tutorials section</li>
            <li>Improved search functionality with better results</li>
            <li>Enhanced mobile responsiveness across all pages</li>
            <li>Fixed various UI bugs and improved performance</li>
          </ul>
        </div>

        {/* Version 1.1.0 */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Version 1.1.0</h2>
            <span className="text-sm text-muted-foreground">March 10, 2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Introduced new blog section</li>
            <li>Added dark mode support</li>
            <li>Implemented user authentication</li>
            <li>Added comment system for blog posts</li>
          </ul>
        </div>

        {/* Version 1.0.0 */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Version 1.0.0</h2>
            <span className="text-sm text-muted-foreground">March 1, 2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Initial release of Best Of Git</li>
            <li>Basic Git command documentation</li>
            <li>Responsive design implementation</li>
            <li>Search functionality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
