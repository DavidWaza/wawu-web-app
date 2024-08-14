
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/assets/access.png",
  },
  {
    id: 2,
    src: "/assets/arms.png",
  },
  {
    id: 3,
    src: "/assets/Avatar.png",
  },
  {
    id: 4,
    src: "/assets/bank.png",
  },
  {
    id: 5,
    src: "/assets/cap.png",
  },
  {
    id: 6,
    src: "/assets/kudi.png",
  },
  {
    id: 7,
    src: "/assets/ngn.png",
  },
  {
    id: 8,
    src: "/assets/Nipcom.png",
  },
  {
    id: 9,
    src: "/assets/Nitda.png",
  },
  {
    id: 10,
    src: "/assets/nnpc.png",
  },
  {
    id: 11,
    src: "/assets/nysc.png",
  },
  {
    id: 12,
    src: "/assets/oil.png",
  },
  {
    id: 13,
    src: "/assets/worldbank.png",
  },
];
const Testimonial = () => {
  return (
    <div className="bg-white">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt=""
            width={150}
            height={150}
            className="mx-5"
          />
        ))}
     
    </div>
  );
};
export default Testimonial;
