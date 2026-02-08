import { Card, CardContent } from "../../../../components/card";

import metricItemImg from "../../../../assets/metric-item.png";
import img from "../../../../assets/img.png";
import img1 from "../../../../assets/img1.png";

type FeaturedListing = {
  category: string;
  title: string;
  backgroundImage?: string;
  imageSrc?: string;
  dots: { active: boolean }[];
};

const featuredListings: FeaturedListing[] = [
  {
    category: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
    backgroundImage: metricItemImg,
    dots: [{ active: true }, { active: false }],
  },
  {
    category: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
    imageSrc: img,
    dots: [
      { active: true },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
    ],
  },
  {
    category: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
    backgroundImage: img1,
    dots: [
      { active: true },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
    ],
  },
];

const FeaturedListingsSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-start justify-between gap-6 px-4">
      {featuredListings.map((listing, index) => (
        <Card
          key={index}
          className="relative w-full max-w-[418px] h-[286px] rounded-xl overflow-hidden border-0 shadow-none mt-6"
        >
          <CardContent className="p-0 relative w-full h-full">
            {/* Background Image */}
            {listing.backgroundImage ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${listing.backgroundImage})`,
                }}
              />
            ) : listing.imageSrc ? (
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt={listing.title}
                src={listing.imageSrc}
              />
            ) : null}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-xl bg-[linear-gradient(182deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.6)_100%)]" />

            {/* Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[9px] flex items-center gap-[6.63px]">
              {listing.dots.map((dot, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-[6.63px] h-[6.63px] rounded-[3.31px] ${
                    dot.active
                      ? "bg-white border border-neutral-200"
                      : "bg-white/20 backdrop-blur"
                  }`}
                />
              ))}
            </div>

            {/* Text */}
            <div className="absolute left-4 bottom-6 flex flex-col items-start">
              <p className="font-medium text-white text-sm">
                {listing.category}
              </p>
              <h3 className="font-semibold text-white text-lg">
                {listing.title}
              </h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default FeaturedListingsSection;
