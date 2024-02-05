import Navbar from "@/components/Header/Navbar/Navbar";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import { Text } from "@/components/ui/Typography/Typography";

const professions = [
  "I am a developer",
  "I am a designer",
  "I am a Virtual Artist",
  "I am into Web3",
];

const Seller = () => {
  return (
    <div>
      <Navbar id={0} href={""} link={""} isCaret={false} />
      <HeroComponent
        header="Showcase your Skills. Get a Patron"
        subText="Give us this day, our daily food. We bring the food: You use your spoon"
        buttonText="Become a seller"
        backgroundColor="bg-[#A812E3]"
        src="/artisan.png"
      />
      <div className="bg-white">
        <div className="py-10">
          <Text variant="medium" className="text-center text-black">
            Join our growing steward’s community
          </Text>
          <div className="flex justify-center gap-4 mt-10">
          {professions.map((profession, index) => (
            <div key={index} className="block">
              <img src={"/assets/photo-girl.png"} alt="photo-girl" />
              <Text variant="small" textWeight="bold" className="text-black text-center my-2 capitalize">
                {profession}
              </Text>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Seller;
