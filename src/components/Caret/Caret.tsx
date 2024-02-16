interface CaretProps  {
 color?:string
}

const Caret = ({color}:CaretProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      x="0px"
      y="0px"
      width={20}
      height={20}
      className={`text-black ${color}`}
    >
      <path d="M49.5,76.97656a4.00126,4.00126,0,0,1-3.14355-1.52588l-29.5-37.47656a4.0004,4.0004,0,0,1,6.2871-4.94824L49.5,66.50977,75.85645,33.02588a4.0004,4.0004,0,0,1,6.2871,4.94824l-29.5,37.47656A4.00126,4.00126,0,0,1,49.5,76.97656Z" />
     
    </svg>
  );
};
export default Caret;
