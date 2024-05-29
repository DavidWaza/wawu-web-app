import { navLinks } from "@/data/portfolioData";
import Link from "next/link";
import { usePathname } from "next/navigation";



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
