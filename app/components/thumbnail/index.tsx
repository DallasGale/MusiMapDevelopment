import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}
const Thumbnail = ({ src, alt }: Props) => {
  return (
    <div>
      <Image src={src} alt={alt} width={250} height={250} />
    </div>
  );
};

export default Thumbnail;
