import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htex";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Amet semper tortor facilisis metus nibh. Rhoncus sitenim mattis odio in risus nunc.",
    image: image1,
  },
  {
    name: "Training Training Classes",

    image: image2,
  },
  {
    name: "Fitness Training Classes",
    description:
      "Amet semper tortor facilisis metus nibh. Rhoncus sitenim mattis odio in risus nunc.",
    image: image3,
  },
  {
    name: "Abs Core Classes",
    image: image4,
  },
  {
    name: "Yoga Classes",
    description:
      "Amet semper tortor facilisis metus nibh. Rhoncus sitenim mattis odio in risus nunc.",
    image: image5,
  },
  {
    name: "Adventure Classes",
    description:
      "Amet semper tortor facilisis metus nibh. Rhoncus sitenim mattis odio in risus nunc.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5 ">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
