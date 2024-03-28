import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/skills-profile/graphics-and-design",
    label: "Graphics & Design",
  },
  {
    href: "/skills-profile/programming-tech",
    label: "Programming & Tech",
  },
  {
    href: "/skills-profile/digital-marketing",
    label: "Digital Marketing",
  },
  {
    href: "/skills-profile/video-and-animation",
    label: "Video & Animation",
  },
  {
    href: "/skills-profile/writing-and-translation",
    label: "Writing & Translation",
  },
  {
    href: "/skills-profile/music-and-audio",
    label: "Music & Audio",
  },
  {
    href: "/skills-profile/business",
    label: "Business",
  },
];

export default function SkillsHeaderNav() {
  const pathname = usePathname();

  return (
    <div>
      <nav className="flex gap-5 px-[5rem] py-10">
        {navLinks.map((navlink, index) => (
          <Link href={navlink.href} key={index}>
            <div
              className={
                pathname === navlink.href ? "text-[#A812E3] font-bold" : "text-black"
              }
            >
              {navlink.label}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
