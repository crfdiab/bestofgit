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
        {/* Version 1.3.0 */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Version 1.3.0</h2>
            <span className="text-sm text-muted-foreground">October 29, 2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Completed all content for framework and purpose sections</li>
            <li>Enhanced user interface for better usability and performance</li>
            <li>Improved mobile responsiveness across all pages</li>
            <li>Fixed build error impacting deployment stability</li>
          </ul>
        </div>

        {/* Version 1.2.0 */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Version 1.2.0</h2>
            <span className="text-sm text-muted-foreground">October 26, 2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Added comprehensive section for web development frameworks</li>
            <li>Removed inactive languages to streamline available content</li>
            <li>Improved CSS styling for Shields.io badges</li>
            <li>Enhanced homepage with interactive cards for a more engaging user experience</li>
          </ul>
        </div>

        {/* Version 1.1.0 */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Version 1.1.0</h2>
            <span className="text-sm text-muted-foreground">October 23, 2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Configured all routes per SEO best practices</li>
            <li>Updated fonts and routes for improved readability and accessibility</li>
            <li>Added and fixed various UI elements on the homepage</li>
          </ul>
        </div>

        {/* Version 1.0.0 */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Version 1.0.0</h2>
            <span className="text-sm text-muted-foreground">October 21, 2024</span>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Initial deployment of Best Of Git with basic directory features</li>
            <li>Set up primary categories by language and framework</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
