// components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative bg-[#0f0f2d] text-white">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Welcome To GatorEx</h1>
            <p className="text-lg mb-6">
              Your Trusted University Marketplace For Buying, Selling, And Subleasing.
            </p>
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
              How it Starts
            </button>
          </div>

          {/* Illustration */}
          <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/illustration/hero.png" // replace with your actual image path
              alt="Illustration"
              width={500}
              height={400}
              quality={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}