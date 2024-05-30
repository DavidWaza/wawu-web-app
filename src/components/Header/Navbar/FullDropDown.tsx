import Link from "next/link";

const FullDropDown = () => {
  return (
    <div className="relative rounded-lg">
      <div className="absolute mt-[70px] z-10 flex w-screen max-w-max -translate-x-[48rem] px-4">
        <div className="w-full max-w-[75rem] flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 py-10 px-20">
          <div className="p-4">
            <div className="grid grid-cols-3 gap-10">
              <div>
                <div>
                  <p className="font-semibold text-black sora">
                    Success Stories
                  </p>
                  <p>Discover how teams work strategically and grow together</p>
                </div>
                <div className="my-3">
                  <p className="font-semibold text-black sora">How to hire</p>
                  <p>Learn about the different ways to get work done</p>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p className="font-semibold text-black sora">Reviews</p>
                    <p>See what it&apos;s like to collaborate on wawu</p>
                  </div>
                  <div className="my-3">
                    <p className="font-semibold text-black sora">
                      How to find work
                    </p>
                    <p>Learn about how to grow your independent career</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p className="font-semibold text-black sora">Guides</p>
                  </div>
                  <div className="my-3">
                    <div className="border border-1 px-3 py-2">
                      Getting started as a freelancer
                    </div>
                    <div className="border border-1 px-3 py-2 my-2">
                      Growing your freelance career
                    </div>
                    <div className="border border-1 px-3 py-2">
                      Hiring & working with independent talent
                    </div>
                    <div className="my-2">
                      <Link href={"#"} className="text-blue-500 underline">
                        See all
                      </Link>
                    </div>
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
export default FullDropDown;
