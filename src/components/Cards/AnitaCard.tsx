import Image from "next/image";

// interface CardProps {
//    name:string,
//    subName:string,
//    ratings:number
// }

const AnitaCard = (props) => {
  return (
    <div className="shadow-md w-[50vh] h-full pb-20">
      <div className="flex justify-center">
        <img src="/assets/book.jpg" alt="lol" className="w-full" />
        {/* <Image src="/assets/book.jpg" alt="lol" width={500} height={500} /> */}
      </div>
     <p className="text-black text-center">{props.name}</p>
     <p className="text-black text-center">{props.subName}</p>
     <p className="text-black text-center">{props.rating}</p>
    </div>
  );
};
export default AnitaCard;
