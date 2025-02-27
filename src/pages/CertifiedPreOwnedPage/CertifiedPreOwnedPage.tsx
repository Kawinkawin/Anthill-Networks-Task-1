import React, { useState } from 'react';
import { Search, Star, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import './CertifiedPreOwnedPage.css';

const CertifiedPreOwnedPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState<string>('');
  const [carMake, setCarMake] = useState<string>('');
  const [carModel, setCarModel] = useState<string>('');
  const [yearRange, setYearRange] = useState<string>('');

  return (
    <div className="certified-page">
      {/* Hero Section */}
      <section className="certified-hero">
        <div className="certified-hero-content">
          <h1>Used cars for sale nationwide</h1>
          <div className="certified-search-bar">
            <input type="text" placeholder="Search by make, model, or keyword" />
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="certified-content">
        {/* Filter Sidebar */}
        <aside className="filter-sidebar">
          <div className="filter-section">
            <h3>Filters</h3>
            <div className="filter-group">
              <label>Price Range</label>
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <option value="">Any Price</option>
                <option value="0-10000">Rs.0 - Rs.10,000</option>
                <option value="10000-20000">Rs.10,000 - Rs.20,000</option>
                <option value="20000-30000">Rs.20,000 - Rs.30,000</option>
                <option value="30000-40000">Rs.30,000 - Rs.40,000</option>
                <option value="40000+">Rs.40,000+</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Make</label>
              <select value={carMake} onChange={(e) => setCarMake(e.target.value)}>
                <option value="">Any Make</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="ford">Ford</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes-Benz</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Model</label>
              <select value={carModel} onChange={(e) => setCarModel(e.target.value)}>
                <option value="">Any Model</option>
                <option value="camry">Camry</option>
                <option value="corolla">Corolla</option>
                <option value="civic">Civic</option>
                <option value="accord">Accord</option>
                <option value="f150">F-150</option>
                <option value="silverado">Silverado</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Year</label>
              <select value={yearRange} onChange={(e) => setYearRange(e.target.value)}>
                <option value="">Any Year</option>
                <option value="2023-2025">2023 - 2025</option>
                <option value="2020-2022">2020 - 2022</option>
                <option value="2017-2019">2017 - 2019</option>
                <option value="2014-2016">2014 - 2016</option>
                <option value="2010-2013">2010 - 2013</option>
                <option value="2000-2009">2000 - 2009</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Body Type</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="checkbox" id="sedan" />
                  <label htmlFor="sedan">Sedan</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="suv" />
                  <label htmlFor="suv">SUV</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="truck" />
                  <label htmlFor="truck">Truck</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="coupe" />
                  <label htmlFor="coupe">Coupe</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="convertible" />
                  <label htmlFor="convertible">Convertible</label>
                </div>
              </div>
            </div>

            <div className="filter-group">
              <label>Fuel Type</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="checkbox" id="gasoline" />
                  <label htmlFor="gasoline">Gasoline</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="diesel" />
                  <label htmlFor="diesel">Diesel</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="electric" />
                  <label htmlFor="electric">Electric</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="hybrid" />
                  <label htmlFor="hybrid">Hybrid</label>
                </div>
              </div>
            </div>

            <div className="filter-group">
              <label>Transmission</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="checkbox" id="automatic" />
                  <label htmlFor="automatic">Automatic</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="manual" />
                  <label htmlFor="manual">Manual</label>
                </div>
              </div>
            </div>

            <button className="btn-primary filter-apply">Apply Filters</button>
            <button className="btn-secondary filter-reset">Reset Filters</button>
          </div>
        </aside>

        {/* Car Listings */}
        <div className="car-listings">
          <div className="listings-header">
            <h2>Certified Pre-Owned Vehicles</h2>
            <div className="listings-sort">
              <label>Sort by:</label>
              <select>
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Mileage: Low to High</option>
                <option>Year: Newest First</option>
              </select>
            </div>
          </div>

          <div className="car-grid">
            <div className="car-card">
              <div className="car-tag">Featured</div>
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Chevrolet Suburban" />
              <div className="car-details">
                <h3>Chevrolet Suburban 2021</h3>
                <div className="car-price">Rs.785,900</div>
                <div className="car-specs">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>7 Seats</span>
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
              <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Chevrolet Suburban" />
              <div className="car-details">
                <h3>Chevrolet Suburban 2021</h3>
                <div className="car-price">Rs.442,500</div>
                <div className="car-specs">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>7 Seats</span>
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
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Chevrolet Suburban" />
              <div className="car-details">
                <h3>Chevrolet Suburban 2021</h3>
                <div className="car-price">Rs.987,800</div>
                <div className="car-specs">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>7 Seats</span>
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
              <img src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Chevrolet Suburban" />
              <div className="car-details">
                <h3>Chevrolet Suburban 2021</h3>
                <div className="car-price">Rs.564,300</div>
                <div className="car-specs">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>7 Seats</span>
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
              <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Chevrolet Suburban" />
              <div className="car-details">
                <h3>Chevrolet Suburban 2021</h3>
                <div className="car-price">Rs.656,700</div>
                <div className="car-specs">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>7 Seats</span>
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
              <img src="https://images.unsplash.com/photo-1617373310678-8c6ae80b19db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80" alt="Chevrolet Suburban" />
              <div className="car-details">
                <h3>Chevrolet Suburban 2021</h3>
                <div className="car-price">Rs.733,900</div>
                <div className="car-specs">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>7 Seats</span>
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

          <div className="pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn">4</button>
            <button className="pagination-btn">5</button>
            <button className="pagination-btn">Next</button>
          </div>
        </div>
      </div>

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

export default CertifiedPreOwnedPage;