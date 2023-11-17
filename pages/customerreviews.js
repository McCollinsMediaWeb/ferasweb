

import HeroBanner from "@/components/HeroBanner";

export default function aboutus() {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.055,
      },
    },
  };
  return (
    <>
      <div>
        <HeroBanner/>
      
      </div>
    </>
  );
}
