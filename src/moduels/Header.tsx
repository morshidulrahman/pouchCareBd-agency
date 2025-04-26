import Image from "next/image";

interface SectionHeadingProps {
  iconSrc?: string;
  title: string;
  className?: string;
}

const SectionHeading = ({
  iconSrc = "/icon-sub-heading.svg",
  title,
  className = "",
}: SectionHeadingProps) => {
  return (
    <h2
      className={`flex items-center gap-2 mb-2 text-sm font-semibold uppercase tracking-widest ${className}`}
    >
      <Image
        src={iconSrc}
        alt="icon"
        width={16}
        height={16}
        className="w-3 h-3"
      />
      {title}
    </h2>
  );
};

export default SectionHeading;
