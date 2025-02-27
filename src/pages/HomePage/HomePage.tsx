import React from 'react';
import { Search, Star, Users, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Get Quality Assured Cars Tailored to Your Preferences</h1>
          <p>Browse through our extensive collection of premium vehicles</p>
          <button className="btn-primary">Explore Now</button>
        </div>
        <div className="search-form">
          <h3>Find Your Dream Car</h3>
          <form>
            <div className="form-group">
              <label>Car Make</label>
              <select>
                <option>Any Make</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>BMW</option>
                <option>Mercedes</option>
              </select>
            </div>
            <div className="form-group">
              <label>Car Model</label>
              <select>
                <option>Any Model</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Truck</option>
                <option>Coupe</option>
              </select>
            </div>
            <div className="form-group">
              <label>Price Range</label>
              <select>
                <option>Any Price</option>
                <option>Rs.0 - Rs.10,000</option>
                <option>Rs.10,000 - Rs.20,000</option>
                <option>Rs.20,000 - Rs.30,000</option>
                <option>Rs.30,000+</option>
              </select>
            </div>
            <button type="submit" className="btn-primary">
              <Search size={16} /> Search
            </button>
          </form>
        </div>
      </section>

      {/* Explore Our Cars Section */}
      <section className="explore-section">
        <h2>Explore Our Cars</h2>
        <div className="car-categories">
          <div className="car-category">
            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Family-Pages/Sedan-Family/Civic-sedan-2025/MY25_Civic-Sedan_Family_Card_Jelly_2x.png?sc_lang=en" alt="Sedan" />
            <span>Sedan</span>
          </div>
          <div className="car-category">
            <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=80" alt="SUV" />
            <span>SUV</span>
          </div>
          <div className="car-category">
            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/109265/hilux-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" alt="Truck" />
            <span>Truck</span>
          </div>
          <div className="car-category">
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=80" alt="Sports" />
            <span>Sports</span>
          </div>
          <div className="car-category">
            <img src="https://static.toiimg.com/thumb/msid-79305644,width-1280,height-720,resizemode-4/79305644.jpg" alt="Luxury" />
            <span>Luxury</span>
          </div>
          <div className="car-category">
            <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV-2023/11024/1694146347051/front-left-side-47.jpg" alt="Electric" />
            <span>Electric</span>
          </div>
        </div>
      </section>

      {/* Featured Listing Section */}
      <section className="featured-section">
        <h2>Featured Listing</h2>
        <div className="car-grid">
          <div className="car-card">
            <div className="car-tag">Featured</div>
            <img src="data:image/jpeg;base64,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" alt="Toyota Camry" />
            <div className="car-details">
              <h3>Toyota Camry 2023</h3>
              <div className="car-price">Rs.32,500</div>
              <div className="car-specs">
                <span>Automatic</span>
                <span>Petrol</span>
                <span>4 Seats</span>
              </div>
              <div className="car-rating">
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <span>(5.0)</span>
              </div>
              <button className="btn-primary">View Details</button>
            </div>
          </div>

          <div className="car-card">
            <div className="car-tag">Featured</div>
            <img src="https://img.autocarpro.in/autocarpro/99870daa-dbb6-4651-8408-74e5f85e2294.jpg?w=750&h=490&q=75&c=1" alt="BMW 3 Series" />
            <div className="car-details">
              <h3>BMW 3 Series 2023</h3>
              <div className="car-price">Rs.45,800</div>
              <div className="car-specs">
                <span>Automatic</span>
                <span>Petrol</span>
                <span>5 Seats</span>
              </div>
              <div className="car-rating">
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <span>(5.0)</span>
              </div>
              <button className="btn-primary">View Details</button>
            </div>
          </div>

          <div className="car-card">
            <div className="car-tag">Featured</div>
            <img src="https://www.financialexpress.com/wp-content/uploads/2022/07/20220714101224_Honda_CR_V_front.jpeg" alt="Honda CR-V" />
            <div className="car-details">
              <h3>Honda CR-V 2023</h3>
              <div className="car-price">Rs.120,900</div>
              <div className="car-specs">
                <span>Automatic</span>
                <span>Petrol</span>
                <span>5 Seats</span>
              </div>
              <div className="car-rating">
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <span>(5.0)</span>
              </div>
              <button className="btn-primary">View Details</button>
            </div>
          </div>
        </div>

        <div className="car-grid">
          <div className="car-card">
            <div className="car-tag">New</div>
            <img src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/39015/punch-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80" alt="Ford F-150" />
            <div className="car-details">
              <h3>TATA Punch 2023</h3>
              <div className="car-price">Rs.952,300</div>
              <div className="car-specs">
                <span>Automatic</span>
                <span>Petrol</span>
                <span>5 Seats</span>
              </div>
              <div className="car-rating">
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <span>(5.0)</span>
              </div>
              <button className="btn-primary">View Details</button>
            </div>
          </div>

          <div className="car-card">
            <div className="car-tag">New</div>
            <img src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/colors/car-01.webp" alt="Porsche 911" />
            <div className="car-details">
              <h3>Maruti Suzuki Swift  2023</h3>
              <div className="car-price">Rs.115,700</div>
              <div className="car-specs">
                <span>Automatic</span>
                <span>Petrol</span>
                <span>2 Seats</span>
              </div>
              <div className="car-rating">
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <span>(5.0)</span>
              </div>
              <button className="btn-primary">View Details</button>
            </div>
          </div>

          <div className="car-card">
            <div className="car-tag">New</div>
            <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230717063236_Maruti%203.jpg&w=700&c=1" alt="Tesla Model 3" />
            <div className="car-details">
              <h3>maruti suzuki fronx 2023</h3>
              <div className="car-price">Rs.528,900</div>
              <div className="car-specs">
                <span>Automatic</span>
                <span>Electric</span>
                <span>5 Seats</span>
              </div>
              <div className="car-rating">
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <Star size={16} fill="#FFD700" stroke="#FFD700" />
                <span>(5.0)</span>
              </div>
              <button className="btn-primary">View Details</button>
            </div>
          </div>
        </div>

        <div className="view-more">
          <button className="btn-secondary">View More</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Hear From Our Community</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"I found my dream car through Website Car. The process was smooth and the customer service was exceptional!"</p>
            </div>
            <div className="testimonial-author">
              <img src="" alt="img" />
              <div>
                <h4>Kawin</h4>
                <p>Satisfied Customer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-nav">
            <button className="nav-dot active"></button>
            <button className="nav-dot"></button>
            <button className="nav-dot"></button>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="contact-section">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230717063236_Maruti%203.jpg&w=700&c=1" alt="Contact" />
          </div>
          <div className="contact-form">
            <h3>Your Roadmap to Ownership</h3>
            <p>Fill out the form below and our team will get back to you shortly.</p>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="news-section">
        <h2>Latest News & Articles from Our Blog</h2>
        <div className="news-grid">
          <div className="news-card">
            <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Comet-EV/11556/1720151908023/front-left-side-47.jpg?impolicy=resize&imwidth=360" alt="Electric Cars" />
            <div className="news-content">
              <span className="news-date">May 15, 2025</span>
              <h3>The Future of Electric Vehicles</h3>
              <p>Discover how electric vehicles are transforming the automotive industry.</p>
              <a href="#" className="read-more">Read More <ChevronRight size={16} /></a>
            </div>
          </div>

          <div className="news-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCP_5UxdLBiIEfEBLR8Fk1YPaLJTkjT_fBfg&s" alt="Car Maintenance" />
            <div className="news-content">
              <span className="news-date">May 10, 2025</span>
              <h3>Essential Car Maintenance Tips</h3>
              <p>Learn how to keep your vehicle in top condition with these maintenance tips.</p>
              <a href="#" className="read-more">Read More <ChevronRight size={16} /></a>
            </div>
          </div>

          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250&q=80" alt="Car Buying Guide" />
            <div className="news-content">
              <span className="news-date">May 5, 2025</span>
              <h3>Ultimate Car Buying Guide</h3>
              <p>Everything you need to know before purchasing your next vehicle.</p>
              <a href="#" className="read-more">Read More <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Do you have Something to Sell through Us?</h2>
          <p>List your vehicle with us and reach thousands of potential buyers.</p>
          <button className="btn-primary">Sell Your Car</button>
        </div>
        <div className="cta-image">
          <img src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Sell Your Car" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;