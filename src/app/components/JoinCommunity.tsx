// components/JoinCommunity.tsx
import Image from 'next/image';

export default function JoinCommunity() {
  return (
    <div className="bg-[#0f0f2d] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Left Section - Illustration */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          {/* Replace this with your actual image */}
          <Image
            src="/illustration/join.png" // Update with your image path
            alt="Community Illustration"
            width={500}
            height={400}
            quality={75}
          />
        </div>

        {/* Right Section - Call to Action */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-3xl font-bold mb-4">
            Ready To Join The GatorEx Community?
          </h2>
          <p className="text-gray-400 mb-6">
            Sign up now and start connecting with fellow UF students.
          </p>
          <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}