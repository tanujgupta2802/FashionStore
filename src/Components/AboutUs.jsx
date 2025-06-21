const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About FashionStore</h1>
        <p className="text-lg text-gray-600">Where Style Meets Elegance</p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600">
            FashionStore is a premier online destination for modern men's and women's fashion. We bring you the latest trends, timeless classics, and everything in between. Our collections are carefully curated to ensure you always look your best, whether you're dressing up for a special occasion or keeping it casual.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is simple: to make high-quality fashion accessible to everyone. We believe that what you wear is an extension of who you are, and we’re here to help you express yourself with confidence. From stylish outfits to premium accessories, FashionStore is your go-to destination for all things fashion.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Trendsetting collections for men and women</li>
            <li>Affordable prices without compromising on quality</li>
            <li>Fast and reliable shipping across the globe</li>
            <li>Eco-friendly packaging and sustainable practices</li>
            <li>Dedicated customer support to assist you 24/7</li>
          </ul>
        </div>
      </div>
    </div>
    );
  };
  export default AboutUs;