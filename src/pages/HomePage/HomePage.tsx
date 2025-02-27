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
                <option>$0 - $10,000</option>
                <option>$10,000 - $20,000</option>
                <option>$20,000 - $30,000</option>
                <option>$30,000+</option>
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
            <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=80" alt="Sedan" />
            <span>Sedan</span>
          </div>
          <div className="car-category">
            <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=80" alt="SUV" />
            <span>SUV</span>
          </div>
          <div className="car-category">
            <img src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=80" alt="Truck" />
            <span>Truck</span>
          </div>
          <div className="car-category">
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=80" alt="Sports" />
            <span>Sports</span>
          </div>
          <div className="car-category">
            <img src="https://images.unsplash.com/photo-1617373310678-8c6ae80b19db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=80" alt="Luxury" />
            <span>Luxury</span>
          </div>
          <div className="car-category">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=80" alt="Electric" />
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
            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Toyota Camry" />
            <div className="car-details">
              <h3>Toyota Camry 2023</h3>
              <div className="car-price">$32,500</div>
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
            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="BMW 3 Series" />
            <div className="car-details">
              <h3>BMW 3 Series 2023</h3>
              <div className="car-price">$45,800</div>
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
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Honda CR-V" />
            <div className="car-details">
              <h3>Honda CR-V 2023</h3>
              <div className="car-price">$35,900</div>
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
            <img src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Ford F-150" />
            <div className="car-details">
              <h3>Ford F-150 2023</h3>
              <div className="car-price">$42,300</div>
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
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Porsche 911" />
            <div className="car-details">
              <h3>Porsche 911 2023</h3>
              <div className="car-price">$115,700</div>
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
            <img src="https://images.unsplash.com/photo-1617373310678-8c6ae80b19db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Tesla Model 3" />
            <div className="car-details">
              <h3>Tesla Model 3 2023</h3>
              <div className="car-price">$48,900</div>
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
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50&q=80" alt="John Smith" />
              <div>
                <h4>John Smith</h4>
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
            <img src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=400&q=80" alt="Contact" />
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
            <img src="https://images.unsplash.com/photo-1617373310678-8c6ae80b19db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250&q=80" alt="Electric Cars" />
            <div className="news-content">
              <span className="news-date">May 15, 2025</span>
              <h3>The Future of Electric Vehicles</h3>
              <p>Discover how electric vehicles are transforming the automotive industry.</p>
              <a href="#" className="read-more">Read More <ChevronRight size={16} /></a>
            </div>
          </div>

          <div className="news-card">
            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250&q=80" alt="Car Maintenance" />
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