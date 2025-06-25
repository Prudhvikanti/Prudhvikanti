export default function AboutUs() {
  const teamImages = [
    {
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
      caption: "Our Dedicated Team"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
      caption: "Quality Services"
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      caption: "Customer Satisfaction"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg leading-relaxed">
        Welcome to our website! We are dedicated to providing the best products and services to our customers.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">Our Team & Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamImages.map(({ src, caption }, index) => (
            <div key={index} className="text-center">
              <img
                src={src}
                alt={caption}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg font-medium">{caption}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
