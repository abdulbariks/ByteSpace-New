import Image from "next/image";
import Link from "next/link";

export function PotentialCreator() {
  return (
    <section className="relative grid min-h-[480px] place-items-center overflow-hidden bg-brand-blue bg-[linear-gradient(to_right,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:120px_120px] px-6 py-16 text-center text-white max-md:min-h-[380px] max-md:px-[22px] max-md:py-[50px]">
      <Image
        className="pointer-events-none absolute top-[-12px] left-[-12px] hidden h-auto w-[165px] md:block lg:w-[195px]"
        src="/images/potential-creator/frame-three.png"
        alt=""
        width={266}
        height={225}
      />
      <Image
        className="pointer-events-none absolute top-[7%] left-[14%] hidden h-auto w-[100px] md:block lg:w-[125px]"
        src="/images/potential-creator/frame-one.png"
        alt=""
        width={177}
        height={176}
      />
      <Image
        className="pointer-events-none absolute right-[15%] top-[5%] hidden h-auto w-[105px] md:block lg:w-[130px]"
        src="/images/potential-creator/cone-two.png"
        alt=""
        width={190}
        height={189}
      />
      <Image
        className="pointer-events-none absolute right-[-25px] top-[8%] hidden h-auto w-[150px] md:block lg:w-[185px]"
        src="/images/potential-creator/cone-four.png"
        alt=""
        width={218}
        height={372}
      />
      <Image
        className="pointer-events-none absolute left-[2%] top-1/2 hidden h-auto w-[90px] -translate-y-1/2 md:block lg:w-[110px]"
        src="/images/potential-creator/cone-one.png"
        alt=""
        width={140}
        height={189}
      />
      <Image
        className="pointer-events-none absolute bottom-0 left-[5%] hidden h-auto w-[150px] md:block lg:w-[190px]"
        src="/images/potential-creator/cone-three.png"
        alt=""
        width={346}
        height={190}
      />
      <Image
        className="pointer-events-none absolute bottom-0 right-[6%] hidden h-auto w-[170px] md:block lg:w-[210px]"
        src="/images/potential-creator/frame-two.png"
        alt=""
        width={334}
        height={199}
      />
      <div className="relative z-[1] max-w-[960px]">
        <h2 className="mb-[18px] text-[clamp(29px,3.4vw,44px)] leading-[1.15] tracking-[-.04em] max-md:text-[30px]">
          Unlock Your Potential as a<br /> Creator with ByteSpace
        </h2>
        <p className="mx-auto mb-[26px] text-sm leading-[1.65] text-[#d6defd] max-md:text-xs">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your first
          course on the ByteSpace Course Library.
        </p>
        <Link
          href="/register"
          className="inline-flex h-[42px] items-center justify-center rounded-full bg-brand-lime px-[27px] text-[13px] text-[#131313] transition-transform hover:-translate-y-0.5"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
