import Banner from "@/components/Banner";
import MCServerTitle from "@/components/titles/MCServerTitle";

const MCBanner: React.FC = () => {
  return (
    <Banner background={"/images/minecraft_banner_light.jpg"}>
      <MCServerTitle />
    </Banner>
  );
};

export default MCBanner;
