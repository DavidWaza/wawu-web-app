import Link from "next/link";

const WorkFullDropdown = () => {
  return (
    <div className="relative rounded-lg">
      <div className="absolute mt-[70px] z-10 flex w-screen max-w-max -translate-x-[48rem] px-4">
        <div className="w-full max-w-[75rem] flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 py-10 px-20">
          <div className="p-4">
            <div className="grid grid-cols-3 gap-10">
              <div>
                <div>
                  <p className="font-semibold text-black sora">Ways to earn</p>
                  <p>Learn why Wawu has the right opportunity for you</p>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p className="font-semibold text-black sora">
                      Find work for your skills
                    </p>
                    <p>Explore the kind of work available in your field.</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p className="font-semibold text-black sora">
                      Find ways to promote yourself
                    </p>
                    <p>Show clients you&apos;ve the one they want</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkFullDropdown;
