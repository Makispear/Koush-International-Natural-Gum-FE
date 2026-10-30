import "./destinationTicker.css";

export default function DestinationTicker() {
  const destinations = [
    "China",
    "Germany",
    "France",
    "Netherlands",
    "Turkey",
    "Greece",
    "Dubai (UAE)",
    "Saudi Arabia",
    "Iraq",
    "Tunis",
    "Morocco",
    "United States",
  ];

  // Duplicate array to ensure seamless infinite looping animation
  const duplicatedDestinations = [...destinations, ...destinations];

  return (
    <div className="destination-ticker-wrapper">
      <div className="ticker-label">Export Corridors:</div>
      <div className="ticker-track-container">
        <div className="ticker-track">
          {duplicatedDestinations.map((country, index) => (
            <div key={index} className="ticker-item">
              <span className="ticker-dot"></span>
              <span>{country}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
