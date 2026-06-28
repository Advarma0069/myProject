import React from "react";
import "../css/Map.css"; 

const MapPage = () => {
  return (
    <div className="contact-map-section">
      {/* Right Map */}
      <div className="map-container">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.548634974106!2d77.3511848!3d28.5740!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea72b1f3e987%3A0xabc123example!2sSector%2062%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1706195397167!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapPage;