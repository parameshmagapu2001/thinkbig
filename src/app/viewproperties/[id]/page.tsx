import Image from "next/image";
import { notFound } from "next/navigation";
import InquiryForm from "../../../../components/form/InquiryForm";

// Property type
interface Property {
  id: number;
  title: string;
  location: string;
  beds: string;
  area: string;
  price: string;
  image: string;
  floorPlan: string;
}

// Final mock data
const properties: Property[] = [
  {
    id: 1,
    title: "Lansum Encanto",
    location: "Financial District",
    beds: "3 & 4 BHK Luxury Apartments",
    area: "4055 – 5045 Sq.Ft",
    price: "₹20,80,000",
    image: "/images/lansumencanto.jpg",
    floorPlan: "/images/image 6.svg",
  },
  {
    id: 2,
    title: "R One Diamond Towers",
    location: "Financial District",
    beds: "2, 3 BHK & 4 BHK Luxury Apartments",
    area: "2765 - 4205 SFT.",
    price: "₹18,50,000",
    image: "/images/r.svg",
    floorPlan: "/images/image 6.svg",
  },
  {
    id: 3,
    title: "Palais Royale",
    location: "Financial District",
    beds: "4 & 5 BHK Residences",
    area: "3800 - 6610 SFT.",
    price: "₹25,00,000",
    image: "/images/palaisroyale.jpg",
    floorPlan: "/images/image 6.svg",
  },
  {
    id: 4,
    title: "Evania by AVR",
    location: "Kokapet",
    beds: "3.5 & 4 BHK Apartment",
    area: "3315 SFT. & 3575 SFT.",
    price: "₹22,30,000",
    image: "/images/e.svg",
    floorPlan: "/images/image 6.svg",
  },
  {
    id: 5,
    title: "Vaishnoi Southwood",
    location: "Mamidipally",
    beds: "4 & 5 BHK Ultra Luxurious Villas",
    area: "300 to 940 Sq. Yards",
    price: "₹35,00,000",
    image: "/images/vaishnoisouthwood.jpg",
    floorPlan: "/images/image 6.svg",
  },
  {
    id: 6,
    title: "CasaGrand Hanford",
    location: "Kokapet",
    beds: "3.5 & 4 BHK Apartments",
    area: "3315 SFT. - 3575 SFT.",
    price: "₹21,75,000",
    image: "/images/c.svg",
    floorPlan: "/images/image 6.svg",
  },
];



// ✅ For static export
export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id.toString() }));
}

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>; // 👈 params is a Promise now
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params; // 👈 must await

  const property = properties.find((p) => p.id.toString() === id);
  if (!property) return notFound();

  return (
    <div className="bg-[#333333] min-h-screen text-white px-4 md:px-[6%] pt-50 pb-10 space-y-10">
      {/* Breadcrumb */}
      <p className="text-sm mb-6">
        Home &gt; Properties &gt;{" "}
        <span className="font-semibold">{property.title}</span>
      </p>

      {/* === Top Section === */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Info Card */}
        <div className="bg-[#3D3A37] p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <h1 className="text-xl md:text-3xl font-bold mb-2">
              {property.title}
            </h1>
            <p className="opacity-80 flex items-center gap-2 mb-4 text-sm md:text-base">
              📍 {property.location}
            </p>
            {/* <p className="text-xl md:text-2xl font-bold mt-4">
              {property.price}
            </p> */}
            {/* <p className="text-xs md:text-sm opacity-80">Starting Price</p> */}
          </div>

          <button className="mt-6 flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white text-[#3D3A37] rounded-full font-medium hover:bg-gray-200 transition">
            Download Brochure ⬇️
          </button>
        </div>

        {/* Center Main + Thumbnails */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-4 gap-4">
            {/* Main Image */}
            <div className="relative col-span-3 w-full h-64 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-20 md:h-28 rounded-2xl overflow-hidden">
                <Image
                  src={property.image}
                  alt="thumb 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-20 md:h-28 rounded-2xl overflow-hidden flex items-center justify-center bg-black/40 text-white font-semibold text-xs md:text-sm">
                +9 Images
              </div>
              <div className="relative w-full h-20 md:h-28 rounded-2xl overflow-hidden flex items-center justify-center bg-black/40 text-white font-semibold text-xs md:text-sm">
                ▶ Video
              </div>
            </div>
          </div>
        </div>

        {/* Right Inquiry Form */}
        <InquiryForm />
      </div>

      {/* === Features + Floor Plan Section === */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side (Key Features + Facilities stacked) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Key Features */}
          <div className="bg-white text-[#3D3A37] p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4">Key Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <p className="opacity-70">🏠 Size</p>
                <p className="font-semibold">{property.area}</p>
              </div>
              <div>
                <p className="opacity-70">🛏 Bedrooms</p>
                <p className="font-semibold">{property.beds}</p>
              </div>
              <div>
                <p className="opacity-70">🛣 Road Approach</p>
                <p className="font-semibold">100 Meters</p>
              </div>
              <div>
                <p className="opacity-70">⚡ Power Backup</p>
                <p className="font-semibold">Available</p>
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-white text-[#3D3A37] p-6 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4">Facilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm">
              <p>✔ Railway Facility</p>
              <p>✔ Bus Facility</p>
              <p>✔ Airport Facility</p>
              <p>✔ Parks</p>
              <p>✔ Hospitals</p>
              <p>✔ Club House</p>
            </div>
          </div>
        </div>

        {/* Right Side (Floor Plan card) */}
        <div className="bg-white text-[#3D3A37] p-6 rounded-2xl h-fit">
          <h3 className="text-lg font-bold mb-2">2D & 3D Floor Plans</h3>
          <p className="text-sm opacity-70 mb-1">{property.area}</p>
          <p className="text-sm mb-4">{property.beds}</p>
          <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden mb-4">
            <Image
              src={property.floorPlan}
              alt="floor plan"
              fill
              className="object-cover"
            />
          </div>
          {/* <p className="text-lg md:text-xl font-bold mb-2">{property.price}</p> */}
          <p className="text-xs opacity-70 mb-4">
            New Launch · Mar ’30 possession
          </p>
          <button className="flex items-center justify-center gap-2 w-full px-4 md:px-6 py-3 bg-[#3D3A37] text-white rounded-full hover:opacity-90 transition">
            Download Brochure ⬇️
          </button>
        </div>
      </div>
    </div>
  );
}
