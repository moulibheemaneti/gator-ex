// components/WhyChooseGatorEx.tsx
import { FaUsers, FaCheckCircle, FaHandPaper, FaKey } from 'react-icons/fa'; // Import icons

export default function WhyChooseGatorEx() {
  return (
    <div className="bg-[#0f0f2d] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-white text-3xl font-bold mb-12">Why Choose GatorEx?</h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-[#171744] p-6 rounded-lg shadow-lg border border-gray-600">
            <FaUsers className="text-purple-400 text-5xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold">Community-Focused</h3>
            <p className="text-gray-400 mt-2">
              Built exclusively for UF students, fostering a close-knit community.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#171744] p-6 rounded-lg shadow-lg border border-gray-600">
            <FaCheckCircle className="text-purple-400 text-5xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold">Trusted & Secure</h3>
            <p className="text-gray-400 mt-2">
              University verification ensures a safe environment for everyone.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#171744] p-6 rounded-lg shadow-lg border border-gray-600">
            <FaHandPaper className="text-purple-400 text-5xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold">Simple & Easy</h3>
            <p className="text-gray-400 mt-2">
              A user-friendly platform that makes buying and selling a breeze.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#171744] p-6 rounded-lg shadow-lg border border-gray-600">
            <FaKey className="text-purple-400 text-5xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold">Subleasing Made Simple</h3>
            <p className="text-gray-400 mt-2">
              Effortlessly post or find subleases tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}