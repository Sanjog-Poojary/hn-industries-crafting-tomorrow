const Gallery = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1664298647969-193b5ebe5524?fm=jpg&q=60&w=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cmlhbCUyMHBpcGVzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1542274368-443d694d79aa?fm=jpg&q=60&w=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kdXN0cmlhbCUyMHBpcGVzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1591719227979-6b31ccf57124?fm=jpg&q=60&w=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kdXN0cmlhbCUyMHBpcGVzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1649956739904-9b5e3618c626?fm=jpg&q=60&w=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZHVzdHJpYWwlMjBwaXBlc3xlbnwwfHwwfHx8MA==",
    "https://plus.unsplash.com/premium_photo-1682144538950-d2595484bc07?fm=jpg&q=60&w=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZHVzdHJpYWwlMjBwaXBlc3xlbnwwfHwwfHx8MA==",
    "https://images.unsplash.com/photo-1668291048339-d33756311d80?fm=jpg&q=60&w=800&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZHVzdHJpYWwlMjBwaXBlc3xlbnwwfHwwfHx8MA==",
  ];

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-padding">
        <div className="text-center mb-12">
          <span className="text-secondary uppercase tracking-widest text-sm font-medium">
            Visual Tour
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-2">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
