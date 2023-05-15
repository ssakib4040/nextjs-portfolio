import { TypeAnimation } from "react-type-animation";

export default function Index() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-4xl font-medium mb-3">
        My name is <span className="text-[#0D6EFD]">Sadman Sakib</span>
      </h2>
      <p className="text-1xl md:text-2xl font-medium text-gray-500">
        {/* I am a Full Stack Web Developer */}
        <TypeAnimation
          sequence={[
            // Same String at the start will only be typed once, initially
            "I am a Full Stack Web Developer",
            2000,
            "I am a Web Designer",
            2000,
            "I am a Web developer",
            2000,
            "I am a Frontend Developer",
            2000,
            "I am a Backend Developer",
            2000,
          ]}
          speed={50}
          // style={{ fontSize: "1em" }}
          repeat={Infinity}
        />
      </p>
    </div>
  );
}
