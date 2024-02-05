const portfolios = [
  "Graphichs & Design",
  "Programming & Tech",
  "Digital Marketing",
  "Video & Animation",
  "Wrtiting & Translation",
  "Music & Video",
  "Data",
  "Business",
  "Photography",
];

const GigPortfolio = () => {
  return (
    <div className="bg-white 2xl:flex justify-center gap-4 px-[5rem] py-10 border border-b-1">
      {portfolios.map((portfolio, index) => (
        <ul key={index} className="flex gap-4">
          <li className="text-black sora">{portfolio}</li>
        </ul>
      ))}
    </div>
  );
};
export default GigPortfolio;
