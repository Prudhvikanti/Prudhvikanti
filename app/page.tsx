export default function Home() {
  const farmerImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80"
  ];

  const pickleImages = [
    "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1510626176961-4b1a7a1a1a1a?auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Website</h1>
      <p className="text-lg leading-relaxed mb-4">
        This is the homepage of your fully functional website built with Next.js and Tailwind CSS.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Use the navigation bar above to explore different pages including About Us, Product, Settings, Chat With Us, and Maps.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        Feel free to customize each page to suit your needs.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Farmers</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {farmerImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Farmer ${index + 1}`}
            className="h-48 w-auto rounded-lg shadow-md flex-shrink-0"
          />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Pickles</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {pickleImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Pickle ${index + 1}`}
            className="h-48 w-auto rounded-lg shadow-md flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
}
