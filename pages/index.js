import AnimatedHeaderText from "@/components/FramerMotion/AnimatedHeaderText";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={container}
        style={{ marginBottom: "-20px" }}
        viewport={{ once: true }}
      >
        <AnimatedHeaderText text="Hi There" />
      </motion.div>
    </>
  );
}
