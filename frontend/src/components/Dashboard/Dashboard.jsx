import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCompass,
  FaSignOutAlt,
  FaUserCircle,
  FaGlobe,
  FaUsers,
  FaStar,
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart,
  FaCamera,
  FaMountain,
  FaWater,
  FaSnowflake,
  FaFire,
  FaPlane,
  FaUtensils,
  FaBed,
  FaTrophy,
  FaGift,
  FaShieldAlt,
  FaHeadphones,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
} from "react-icons/fa";
import { 
  featuredTours, 
  allTours, 
  userBookings, 
  userStats, 
  travelTips, 
  userPreferences,
  upcomingEvents 
} from "./DashboardData";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    } else {
      navigate("/login");
    }
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'Confirmed': return 'status-confirmed';
      case 'Pending': return 'status-pending';
      case 'Completed': return 'status-completed';
      case 'Cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <span>Loading your adventure...</span>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="dashboard-container">
      {/* Navigation */}
      <nav className="dashboard-nav">
        <div className="nav-logo">
          <FaCompass size={28} color="#667eea" />
          <h1>Iceland<span>Tour</span></h1>
        </div>
        <div className="nav-user">
          <div className="user-info">
            <div className="user-avatar">
              {user.firstName?.charAt(0)}
            </div>
            <div className="user-details">
              <div className="user-name">{user.firstName}</div>
              <div className="user-badge">{userStats.memberLevel}</div>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="dashboard-hero">
        <h1>✨ Welcome Back, {user.firstName}! ✨</h1>
        <p>Your Icelandic adventure awaits - {userStats.travelPoints} travel points ready to use!</p>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <FaGlobe className="stat-icon" />
            <div className="stat-number">{userStats.totalBookings}</div>
            <div className="stat-label">Total Bookings</div>
          </div>
          <div className="stat-card">
            <FaCheckCircle className="stat-icon" />
            <div className="stat-number">{userStats.completedTours}</div>
            <div className="stat-label">Completed Tours</div>
          </div>
          <div className="stat-card">
            <FaHeart className="stat-icon" />
            <div className="stat-number">{userStats.savedTours}</div>
            <div className="stat-label">Saved Tours</div>
          </div>
          <div className="stat-card">
            <FaStar className="stat-icon" />
            <div className="stat-number">{userStats.reviewCount}</div>
            <div className="stat-label">Reviews Written</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="dashboard-tabs">
          {["overview", "tours", "bookings", "profile", "tips"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <div className="welcome-card">
              <h2>Your Iceland Journey Continues!</h2>
              <p>
                You've explored {userStats.completedTours} amazing destinations with us. 
                Ready for your next adventure? Check out our featured tours below!
              </p>
            </div>

            <h2 className="section-title">
              <FaFire /> Featured Tours
            </h2>
            <div className="tours-grid">
              {featuredTours.slice(0, 3).map((tour) => (
                <div key={tour.id} className="tour-card">
                  <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}>
                    <div className="tour-price">{tour.price}</div>
                    <div className="tour-badge">🔥 Best Seller</div>
                  </div>
                  <div className="tour-content">
                    <h3 className="tour-title">{tour.name}</h3>
                    <div className="tour-details">
                      <span><FaClock /> {tour.duration}</span>
                      <span><FaUsers /> Max {tour.groupSize}</span>
                      <span><FaMapMarkerAlt /> {tour.location}</span>
                    </div>
                    <div className="tour-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} color={i < Math.floor(tour.rating) ? "#ffc107" : "#e0e0e0"} size={14} />
                        ))}
                      </div>
                      <span>{tour.rating} ({tour.reviewCount} reviews)</span>
                    </div>
                    <button className="book-btn">Book This Tour</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Events */}
            <h2 className="section-title" style={{ marginTop: "2rem" }}>
              <FaCalendarAlt /> Upcoming Events in Iceland
            </h2>
            <div className="tours-grid">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="tour-card">
                  <div className="tour-content">
                    <h3 className="tour-title">{event.name}</h3>
                    <div className="tour-details">
                      <span><FaCalendarAlt /> {event.date}</span>
                      <span><FaMapMarkerAlt /> {event.location}</span>
                    </div>
                    <span className="status-badge status-confirmed">{event.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tours Tab */}
        {activeTab === "tours" && (
          <div>
            <h2 className="section-title">
              <FaCompass /> All Available Tours
            </h2>
            <div className="tours-grid">
              {allTours.map((tour) => (
                <div key={tour.id} className="tour-card">
                  <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }}>
                    <div className="tour-price">{tour.price}</div>
                  </div>
                  <div className="tour-content">
                    <h3 className="tour-title">{tour.name}</h3>
                    <div className="tour-details">
                      <span><FaClock /> {tour.duration}</span>
                      <span><FaUsers /> Max {tour.groupSize}</span>
                      <span><FaMapMarkerAlt /> {tour.location}</span>
                    </div>
                    <div className="tour-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} color={i < Math.floor(tour.rating) ? "#ffc107" : "#e0e0e0"} size={14} />
                        ))}
                      </div>
                      <span>{tour.rating} ({tour.reviewCount} reviews)</span>
                    </div>
                    <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: "1rem" }}>
                      {tour.description.substring(0, 100)}...
                    </p>
                    <button className="book-btn">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <div className="bookings-container">
            <h2 style={{ color: "#333", marginBottom: "1.5rem" }}>Your Bookings</h2>
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Tour</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {userBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.tour}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.totalPrice}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-avatar">
                {user.firstName?.charAt(0)}{user.fatherName?.charAt(0)}
              </div>
              <div className="profile-info">
                <h2>{user.firstName} {user.fatherName || ""} {user.grandName || ""}</h2>
                <p><FaTrophy style={{ color: "#ffc107" }} /> {userStats.memberLevel} Member</p>
                <p><FaGift /> {userStats.travelPoints} Travel Points</p>
              </div>
            </div>

            <div className="profile-grid">
              <div className="info-section">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <FaEnvelope /> <span>{user.email}</span>
                </div>
                <div className="info-item">
                  <FaPhoneAlt /> <span>{user.phoneNumber}</span>
                </div>
                {user.location && (
                  <div className="info-item">
                    <FaMapMarkerAlt /> <span>{user.location}</span>
                  </div>
                )}
              </div>

              <div className="info-section">
                <h3>Travel Preferences</h3>
                <div className="preferences-tags">
                  {userPreferences.map((pref, index) => (
                    <span key={index} className="preference-tag">
                      {pref === "Photography" && <FaCamera />}
                      {pref === "Hiking" && <FaMountain />}
                      {pref === "Spa" && <FaWater />}
                      {pref === "Northern Lights" && <FaStar />}
                      {pref === "Glaciers" && <FaSnowflake />}
                      {pref === "Volcanoes" && <FaFire />}
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Travel Tips Tab */}
        {activeTab === "tips" && (
          <div>
            <h2 className="section-title">
              <FaShieldAlt /> Essential Iceland Travel Tips
            </h2>
            <div className="tours-grid">
              {travelTips.map((tip, index) => (
                <div key={index} className="tour-card">
                  <div className="tour-content">
                    <div style={{ fontSize: "3rem", textAlign: "center", marginBottom: "0.5rem" }}>
                      {tip.icon}
                    </div>
                    <h3 className="tour-title" style={{ textAlign: "center" }}>{tip.title}</h3>
                    <p style={{ color: "#666", textAlign: "center", marginTop: "0.5rem" }}>
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: "2rem" }}>
              <FaHeadphones /> 24/7 Support
            </h2>
            <div className="welcome-card" style={{ textAlign: "center" }}>
              <p>Need help planning your trip? Our travel experts are here for you 24/7!</p>
              <p style={{ marginTop: "0.5rem", color: "#667eea", fontWeight: "bold" }}>
                📞 +354 123 4567 | ✉️ support@icelandtour.com
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>© 2024 IcelandTour - Your Adventure Awaits in the Land of Fire and Ice</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
          <FaHeart className="footer-heart" /> Made with passion for Iceland
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;