// components/HowItWorks.tsx
import { FaHandshake, FaSearch, FaUsers } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1: Sign Up */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"> {/* Updated border-radius and border */}
        <FaUsers className="text-green-500 text-5xl mx-auto mb-4" />
        <h3 className="text-black text-xl font-bold mt-4">Sign Up</h3>
          <p className="text-gray-600 mt-2">
            Create your account using your university email for a trusted student-only experience.
          </p>
        </div>

        {/* Step 2: Browse Listings */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"> {/* Updated border-radius and border */}
        <FaSearch className="text-green-500 text-5xl mx-auto mb-4" />
        <h3 className="text-black text-xl font-bold mt-4">Browse Listings</h3>
          <p className="text-gray-600 mt-2">
            Explore items for sale or subleases, or post your own listings to connect with students.
          </p>
        </div>

        {/* Step 3: Complete Transactions */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"> {/* Updated border-radius and border */}
        <FaHandshake className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-black text-xl font-bold mt-4">Complete Transactions</h3>
          <p className="text-gray-600 mt-2">
            Securely make transactions with trusted students and arrange safe exchanges.
          </p>
        </div>
      </div>
    </div>
  );
}