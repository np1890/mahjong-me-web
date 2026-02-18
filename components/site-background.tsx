import Image from "next/image";

export default function SiteBackground() {
  return (
    <>
      <div
        className="fixed inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, #b2e0ff 0%, #a0d9f4 50%, #e8f6fc 100%)",
        }}
      />

      <div
        className="fixed inset-0 -z-20 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 3px,
            rgba(109, 194, 233, 0.3) 3px,
            rgba(109, 194, 233, 0.3) 6px
          )`,
        }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[4%] top-[16%] opacity-35">
          <Image
            src="/images/Character_1.png"
            alt=""
            width={60}
            height={82}
            className="rotate-[-12deg] drop-shadow-lg"
          />
        </div>
        <div className="absolute right-[6%] top-[22%] opacity-35">
          <Image
            src="/images/Flower_1.png"
            alt=""
            width={60}
            height={82}
            className="rotate-[8deg] drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-[18%] left-[9%] opacity-30">
          <Image
            src="/images/Bamboo_5.png"
            alt=""
            width={54}
            height={74}
            className="rotate-[14deg] drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-[14%] right-[12%] opacity-30">
          <Image
            src="/images/Dot_9.png"
            alt=""
            width={54}
            height={74}
            className="rotate-[-9deg] drop-shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
