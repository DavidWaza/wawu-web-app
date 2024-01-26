import Typewriter from "typewriter-effect";
export function TypeWriter() {
  return (
    <div className="sora text-[3rem] font-bold text-[#9510c9]">
      <Typewriter
        options={{
          strings: [
            "Movers + Shakers",
            "Daring Distruptors,",
            "Savy Startup",
            "Industry Leaders",
            "Great Partnership",
            "Innovators",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
