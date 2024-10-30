import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Best Of Git",
  description: "Learn more about Best Of Git and our mission to simplify Git learning",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold">About Us</h1>
        <p className="text-muted-foreground">
          Best Of Git is a GitHub repositories directory filtered and organized by programming languages, frameworks, and general purpose use cases. We are periodically updating our directory with more languages, frameworks, and use cases, based on our valued users&apos; demand.
        </p>
      </div>

      <div className="space-y-8">
        {/* Our Mission */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to provide developers with a centralized hub for discovering the best GitHub repositories. 
            We aim to simplify the search for high-quality projects by ranking and listing them by stars and forks, 
            making it easy for developers to find trusted and popular resources for their projects, learning, or inspiration.
          </p>
        </div>

        {/* What We Offer */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">What We Offer</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We offer a curated selection of the top GitHub repositories across various programming languages 
            and frameworks, saving you time by organizing these resources in one place. In addition to our 
            core repository listings, we also publish insightful blog posts about GitHub, open-source 
            contributions, and popular repositories. Stay tuned as we expand with more sections based on user demand!
          </p>
        </div>

        {/* Our Team */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Our Team</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Currently, Best Of Git is powered solely by Mohamed Diab. As the project grows, we are excited 
            about the potential to invite other developers and open-source enthusiasts to contribute, 
            bringing even more depth and diversity to our offerings.
          </p>
        </div>

        {/* Contact Us */}
        <div className="pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Get in Touch</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Have questions or suggestions? We&apos;d love to hear from you! Reach out to us at{' '}
            <a href="mailto:contact@bestofgit.com" className="text-primary hover:underline">
              contact@bestofgit.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
