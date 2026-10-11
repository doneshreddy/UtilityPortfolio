import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  title?: string;
};

export default function BrandMark({
  className = "h-10 w-10",
  title = "Lambdabees",
}: BrandMarkProps) {
  return (
    <Image
      src="/lambdabees-emblem.png"
      alt={`${title} lambda bee emblem`}
      width={96}
      height={96}
      className={className}
      draggable={false}
    />
  );
}
