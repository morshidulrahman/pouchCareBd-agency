import Link from "next/link";

interface HeaderComponentProps {
  title: string;
  highlight?: string;
  breadcrumb?: { label: string; href?: string }[];
  bgUrl?: string;
  minHeight?: string;
}

const HeaderComponent = ({
  title,
  highlight,
  breadcrumb = [],
  bgUrl = "https://demo.awaikenthemes.com/artistics/seo/wp-content/uploads/2024/12/page-header-bg-1.jpg",
  minHeight = "400px",
}: HeaderComponentProps) => {
  return (
    <div
      className="w-full relative flex flex-col justify-between"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Centered Title & Breadcrumb */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-10">
        <h1 className="text-5xl md:text-6xl font-semibold text-white text-center">
          {title}
          {highlight && (
            <> <span className="text-[#bff747]">{highlight}</span></>
          )}
        </h1>
        {breadcrumb.length > 0 && (
          <div className="mt-4 flex items-center text-white/80 font-medium">
            {breadcrumb.map((item, idx) => (
              <span key={item.label} className="flex items-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#bff747] transition-colors text-xl"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#bff747]">{item.label}</span>
                )}
                {idx < breadcrumb.length - 1 && (
                  <span className="mx-1 text-2xl mt-3">*</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
