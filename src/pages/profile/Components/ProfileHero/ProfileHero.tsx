import { usePathname } from "next/navigation";
import Image from "next/image";

const ProfileHero = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname.includes('seller-profile') ? (
        <>
          <div className="bg-img-1"></div>
          <div className="-mt-[50px] ml-20">
            <Image
              src="/assets/profile-pic.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#FF0084] w-full h-[40vh]"></div>
          <div className="-mt-[50px] ml-20">
            <Image
              src="/assets/profile-pic.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default ProfileHero;
