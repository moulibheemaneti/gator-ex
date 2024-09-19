import React from 'react';
import { FaUsers, FaShieldAlt, FaHandPaper, FaKey } from 'react-icons/fa'; // Importing icons from react-icons

const WhyChooseGatorEx = () => {
  return (
    <section className="bg-[#0e0a22] py-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose GatorEx?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Community-Focused */}
          <div className="p-8 border border-gray-600 rounded-lg bg-[#1a1530]">
            <FaUsers className="text-purple-400 text-6xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Community-Focused</h3>
            <p className="text-gray-400">
              Built exclusively for UF students, fostering a close-knit community.
            </p>
          </div>

          {/* Trusted & Secure */}
          <div className="p-8 border border-gray-600 rounded-lg bg-[#1a1530]">
            <FaShieldAlt className="text-purple-400 text-6xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Trusted & Secure</h3>
            <p className="text-gray-400">
              University verification ensures a safe environment for everyone.
            </p>
          </div>

          {/* Simple & Easy */}
          <div className="p-8 border border-gray-600 rounded-lg bg-[#1a1530]">
            <FaHandPaper className="text-purple-400 text-6xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Simple & Easy</h3>
            <p className="text-gray-400">
              A user-friendly platform that makes buying and selling a breeze.
            </p>
          </div>

          {/* Subleasing Made Simple */}
          <div className="p-8 border border-gray-600 rounded-lg bg-[#1a1530]">
            <FaKey className="text-purple-400 text-6xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Subleasing Made Simple</h3>
            <p className="text-gray-400">
              Effortlessly post or find subleases tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGatorEx;
