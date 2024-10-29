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
          Discover the story behind Best Of Git and our mission to make Git accessible to everyone
        </p>
      </div>

      <div className="space-y-8">
        {/* Our Mission */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Best Of Git was created with a simple goal: to make Git version control accessible and 
            understandable for developers of all skill levels. We believe that proper version control 
            is fundamental to successful software development, and we're here to help you master it.
          </p>
        </div>

        {/* What We Offer */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">What We Offer</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Comprehensive Git tutorials for beginners to advanced users</li>
            <li>Curated collection of Git commands and best practices</li>
            <li>Regular updates with new content and improvements</li>
            <li>Community-driven learning environment</li>
          </ul>
        </div>

        {/* Our Team */}
        <div className="border-b pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Our Team</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We are a passionate team of developers and educators who understand the challenges of 
            learning Git. Our diverse backgrounds in software development enable us to create 
            content that resonates with developers at every stage of their journey.
          </p>
        </div>

        {/* Contact Us */}
        <div className="pb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Get in Touch</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Have questions or suggestions? We'd love to hear from you! Reach out to us at{' '}
            <a href="mailto:contact@bestofgit.com" className="text-primary hover:underline">
              contact@bestofgit.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
