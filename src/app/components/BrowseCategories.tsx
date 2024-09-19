// components/BrowseCategories.tsx
import Image from 'next/image';

export default function BrowseCategories() {
  return (
    <div className="bg-white py-12">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
        Browse Popular Categories
      </h2>

      {/* Categories Navigation */}
      <div className="flex justify-center space-x-8 mb-8">
        <button className="text-green-600 border-b-4 border-green-600 pb-2">Textbooks</button>
        <button className="text-gray-500 hover:text-green-600">Electronics</button>
        <button className="text-gray-500 hover:text-green-600">Furniture</button>
        <button className="text-gray-500 hover:text-green-600">Sub Leases</button>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/categories/sofa.png"
              alt="Product"
              layout="fill"
              objectFit="cover"
              quality={75}
              placeholder="blur"
              blurDataURL="/categories/sofa.png"
            />
          </div>
          <div className="p-4">
            <div className="text-xl font-semibold text-purple-600">$25</div>
            <div className="text-gray-700 text-lg font-bold mt-2">Intro to Psychology</div>
            <div className="text-gray-500 text-sm mt-1">Blvt dfghjty</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/categories/sofa.png"
              alt="Product"
              layout="fill"
              objectFit="cover"
              quality={75}
              placeholder="blur"
              blurDataURL="/categories/sofa.png"
            />
          </div>
          <div className="p-4">
            <div className="text-xl font-semibold text-purple-600">$25</div>
            <div className="text-gray-700 text-lg font-bold mt-2">Intro to Psychology</div>
            <div className="text-gray-500 text-sm mt-1">Blvt dfghjty</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/categories/sofa.png"
              alt="Product"
              layout="fill"
              objectFit="cover"
              quality={75}
              placeholder="blur"
              blurDataURL="/categories/sofa.png"
            />
          </div>
          <div className="p-4">
            <div className="text-xl font-semibold text-purple-600">$25</div>
            <div className="text-gray-700 text-lg font-bold mt-2">Intro to Psychology</div>
            <div className="text-gray-500 text-sm mt-1">Blvt dfghjty</div>
          </div>
        </div>
      </div>
    </div>
  );
}