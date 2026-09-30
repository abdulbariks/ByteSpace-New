import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=85",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=85",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=85",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It’s fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function OurCommunity() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbfcf8] px-6 py-[76px] max-md:px-5 max-md:py-[52px]">
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute right-[-3%] top-[-14%] z-0 w-[52vw] max-w-[760px]"
        src="/images/community/community-ellipse-two.png"
        alt=""
        width={752}
        height={574}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25%] left-[-8%] z-0 w-[50vw] max-w-[720px]"
        src="/images/community/community-ellipse-one.png"
        alt=""
        width={735}
        height={675}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute right-[-16%] bottom-[-26%] z-0 w-[45vw] max-w-[640px]"
        src="/images/community/community-ellipse-three.png"
        alt=""
        width={638}
        height={784}
      />
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mb-[38px] grid grid-cols-2 items-center gap-10 max-md:mb-6 max-md:grid-cols-1 max-md:gap-[15px]">
          <h2 className="m-0 text-[clamp(30px,3.1vw,43px)] leading-[1.12] tracking-[-.04em] max-md:text-[30px]">
            Discover What Our
            <br /> Community Is Saying
          </h2>
          <p className="m-0 text-sm leading-[1.65] text-[#737681] max-md:text-xs">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-3">
          {testimonials.map((person) => (
            <article className="flex flex-col rounded-[20px] bg-white p-6 shadow-[0_6px_30px_#1822440b] max-md:p-5" key={person.name}>
              <Image className="mb-3 size-[52px] rounded-full object-cover" src={person.image} alt="" width={52} height={52} />
              <b className="text-[15px]">{person.name}</b>
              <span className="mt-[3px] text-xs text-blue-700">{person.role}</span>
              <p className="mt-[13px] mb-0 text-[13px] leading-[1.7] text-[#6f717a] max-md:text-xs">“{person.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
