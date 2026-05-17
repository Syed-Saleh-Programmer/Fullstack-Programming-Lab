import StoreScaffold from "@/components/StoreScaffold";

export default function Home() {
  const sourcePages = [
    "https://unsplash.com/s/photos/product",
    "https://www.rawpixel.com/search/product",
    "https://www.lightxeditor.com/photo-editing/ai-product-photo-editor/",
    "https://www.shutterstock.com/search/beauty-template",
    "https://soona.co/blog/the-ultimate-product-photography-guide-in-2026",
  ];

  const imagePool = [
    "https://source.unsplash.com/random/1600x900/?product&sig=11",
    "https://source.unsplash.com/random/1200x800/?spa-product&sig=12",
    "https://source.unsplash.com/random/1200x800/?cosmetics-product&sig=13",
    "https://d2v5dzhdg4zhx3.cloudfront.net/graphics/product_showcase_landing_page/webp/E-commerce.webp",
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/d06b4d8c-706b-4501-824d-453995ae4651.webp",
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/5861d148-afe2-4bfc-8aed-1f1f4b61b367.webp",
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/0a67b540-7d86-4dcc-81c8-a6ef2f2d55da.webp",
    "https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6851ef69b64528a9ee3e9b02_6633f57bd5f74992577ce53e_pasted_image_0.webp",
    "https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6851ef69b64528a9ee3e9af9_6633f57bd5f74992577ce52a_pasted_image_0-2.webp",
    "https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6851ef69b64528a9ee3e9b4f_6633f57ad5f74992577ce50d_pasted_image_0-3.webp",
    "https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6851ef69b64528a9ee3e9b46_6633f57bd5f74992577ce536_pasted_image_0-4.webp",
    "https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6851ef69b64528a9ee3e9b18_6633f57bd5f74992577ce516_web_Yael_Joseph_r1_6718.webp",
  ];

  const pick = (list, seed) => list[(seed * 17 + 9) % list.length];

  const promoCards = [
    { title: "5-7 PERSON SPA", text: "This is photoshop's version of lorem ipsum." },
    { title: "TV THEATER SPA", text: "This is photoshop's version of lorem ipsum." },
    { title: "SAVE 50%", text: "This is photoshop's version of lorem ipsum." },
  ].map((card, idx) => ({
    ...card,
    image: pick(imagePool, idx + 1),
    sourcePage: pick(sourcePages, idx + 1),
  }));

  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: "XS SCYBAX SERIES 119",
    price: "$500.00",
    image: pick(imagePool, index + 4),
    sourcePage: pick(sourcePages, index + 4),
  }));

  const heroImage =
    "https://cdn.prod.website-files.com/622488277ab5ee818d179d9f/6851ef69b64528a9ee3e9b18_6633f57bd5f74992577ce516_web_Yael_Joseph_r1_6718.webp";
  const heroSource = pick(sourcePages, 99);

  return (
    <StoreScaffold>
        <section className="hero-banner">
          <img
            className="hero-photo"
            src={heroImage}
            alt="Featured spa product"
          />
          <div className="hero-copy">
            <h1>Barrier Reef 158 Jet TV - Stereo - Home Theater</h1>
            <p>Extra large and deep 8 person 158 Jet Super Spa, TV-Home Theater Spa System.</p>
            <div className="hero-price">$4899.00</div>
            <button type="button">More Details</button>
            <a className="image-source" href={heroSource} target="_blank" rel="noreferrer">
              Image source
            </a>
          </div>
          <div className="hero-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>

        <section className="promo-row">
          {promoCards.map((card, idx) => (
            <article
              key={card.title}
              className={`promo-card ${idx === 2 ? "promo-sale" : idx === 1 ? "promo-stone" : "promo-dark"}`}
            >
              <img src={card.image} alt={card.title} />
              <div className="promo-overlay">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a className="image-source" href={card.sourcePage} target="_blank" rel="noreferrer">
                  Image source
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="products-section">
          <h2>NEW PRODUCTS</h2>
          <div className="products-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>The goods of our stores are very reliable and durable and care about the customer.</p>
                <div className="price">{product.price}</div>
                <button type="button">ADD TO CART</button>
                <div className="product-links">
                  <a href="#">ADD TO WISH LIST</a>
                  <a href="#">MORE DETAILS</a>
                </div>
                <a className="image-source" href={product.sourcePage} target="_blank" rel="noreferrer">
                  Image source
                </a>
              </article>
            ))}
          </div>
        </section>
    </StoreScaffold>
  );
}
