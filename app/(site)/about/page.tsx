// // "use client";

// import AboutClosing from "../../components/about/AboutClosing";
// import AboutHero from "../../components/about/AboutHero";
// import AboutTimeline from "../../components/about/AboutTimeline";
// import BranchReviews from "../../components/about/BranchReviews";
// import GallerySlider from "../../components/about/GallerySlider";
// import TeamSection from "../../components/about/TeamSection";


// export default function AboutPage() {
//   return (
//     <section className="text-[var(--text-dark)] font-[Noto_Sans_Bengali]">
//       <AboutHero />
//       <AboutTimeline />
//       <BranchReviews />
//       {/* <TeamSection /> */}
//       <GallerySlider />
//       <AboutClosing />
//     </section>
//   );
// }


import AboutHeroV2 from "../../components/about/AboutHeroV2";
import AboutTimelineV2 from "../../components/about/AboutTimelineV2";
import BranchReviewsV2 from "../../components/about/BranchReviewsV2";
import AboutClosingV2 from "../../components/about/AboutClosingV2";
import GallerySliderV2 from "@/app/components/about/GallerysliderV2";
import BranchReviewsV3 from "@/app/components/about/BranchReviewsV3";

export default function AboutPage() {
  return (
    <main className="font-[Noto_Sans_Bengali] text-[var(--text-primary)] bg-[var(--light-bg)] dark:bg-[var(--dark-bg)"  style={{
        background: `
          radial-gradient(circle at top left, var(--hero-glow-primary), transparent 55%),
          linear-gradient(
            to bottom right,
            var(--hero-bg-from),
            var(--hero-bg-via),
            var(--hero-bg-to)
          )
        `,
      }}>
      <AboutHeroV2 />
      <AboutTimelineV2 />
      <BranchReviewsV3 />
      <GallerySliderV2 />
      <AboutClosingV2 />
    </main>
  );
}
