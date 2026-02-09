import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

const info = [
  {
    "title": "Branches",
    "description": "Abstract Branches lets you manage,\n version, and document your designs in\n one place.",
    "logo": "branch.png"
  },
  {
    "title": "Manage your account",
    "description": "Configure your account settings, such as\n your email, profile details, and password.",
    "logo": "accounting.png"
  },
  {
    "title": "Manage organizations, teams, and projects",
    "description": "Use Abstract organizations, teams, and\n projects to organize your people and your\n work.",
    "logo": "file-organizing.png"
  },
  {
    "title": "Manage billing",
    "description": "Change subscriptions and payment\n details.",
    "logo": "billing.png"
  },
  {
    "title": "Authenticate to Abstract",
    "description": "Set up and configure SSO, SCIM, and\n Just-in-Time provisioning.",
    "logo": "fact-checking.png"
  },
  {
    "title": "Abstract support",
    "description": "Get in touch with a human.",
    "logo": "support.png"
  }
]

export default function Home() {
  return (
    <div>

      {/* navbar component */}
      <div>
        <Navbar />
      </div>

      {/* main */}
      <main className="flex flex-col items-center">

        {/* query */}
        <div className="bg-linear-to-r from-blue-200 to-purple-200 w-screen flex justify-center">
          <section className="h-80 flex flex-col justify-center ">
            <p className="text-black text-7xl text-center">How can we help?</p>
            <div className="relative">
              <input type="text" placeholder="Search" className="w-full rounded-sm bg-white drop-shadow-xl/15 border border-gray-500 placeholder:text-gray-400 p-3 mt-8  focus:outline-none" />
              <span className="absolute top-10 right-3 text-2xl text-gray-400">
                →
              </span>
            </div>
          </section>
        </div>

        {/* features */}
        <section>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-40 gap-y-10 mt-20 mb-15">
            {info.map((i) => {
              return (
                <Card key={i.title} title={i.title} desc={i.description} logo={i.logo} />
              )
            })}
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="w-full py-10 bg-black text-white flex justify-center gap-x-40">
        <div className="flex gap-x-10 mt-5 w-[70%] justify-evenly">
          <ul>
            <li className="font-bold mb-3">Abstract</li>
            <li>Branches</li>
          </ul>
          <ul>
            <li className="font-bold mb-3">Resources</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
          <ul>
            <li className="font-bold mb-3">Community</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribble</li>
            <li>Podcast</li>
          </ul>
          <div>
            <ul>
              <li className="font-bold mb-3">Company</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
            <ul className="mt-3">
              <li className="font-bold mb-3">Contact Us</li>
              <li>info@abstract.com</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end flex-col">
          <p className="text-xl">© Copyright 2026</p>
          <p>Abstract Studio Design, inc</p>
          <p>All Rights Reserved</p>
        </div>
      </footer>

    </div>
  );
}
