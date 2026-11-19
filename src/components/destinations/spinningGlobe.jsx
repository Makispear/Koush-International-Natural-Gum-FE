import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import DestinationTicker from "./destinationTicker";
import "./spinningGlobe.css";

export default function SpinningGlobeDestinations() {
  const globeEl = useRef();
  const containerRef = useRef();
  const [globeSize, setGlobeSize] = useState({ width: 800, height: 500 });

  const tradePins = [
    {
      name: "Khartoum, Sudan (HQ & Origin)",
      lat: 15.5007,
      lng: 32.5599,
      type: "origin",
      color: "#c59b27",
    },
    {
      name: "China (Shanghai / Guangzhou)",
      lat: 31.2304,
      lng: 121.4737,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "Germany (Hamburg)",
      lat: 53.5511,
      lng: 9.9937,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "France (Marseille / Paris)",
      lat: 48.8566,
      lng: 2.3522,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "Netherlands (Rotterdam)",
      lat: 51.9244,
      lng: 4.4777,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "Turkey (Istanbul)",
      lat: 41.0082,
      lng: 28.9784,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "Greece (Piraeus)",
      lat: 37.9838,
      lng: 23.7275,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "Dubai (UAE)",
      lat: 25.2048,
      lng: 55.2708,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "Saudi Arabia (Jeddah)",
      lat: 21.5433,
      lng: 39.1728,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "Iraq (Baghdad)",
      lat: 33.3152,
      lng: 44.3661,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "Tunisia (Tunis)",
      lat: 36.8065,
      lng: 10.1815,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "Morocco (Casablanca)",
      lat: 33.5731,
      lng: -7.5898,
      type: "destination",
      color: "#ffffff",
    },
    {
      name: "United States (New York / Savannah)",
      lat: 40.7128,
      lng: -74.006,
      type: "destination",
      color: "#c59b27",
    },
    {
      name: "Brazil (Santos / Rio de Janeiro)",
      lat: -23.5505,
      lng: -46.6333,
      type: "destination",
      color: "#ffffff",
    }
  ];

  const origin = tradePins[0];
  const tradeRoutes = tradePins.slice(1).map((destination) => ({
    startLat: origin.lat,
    startLng: origin.lng,
    endLat: destination.lat,
    endLng: destination.lng,
  }));

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth || 800;
        setGlobeSize({
          width: width,
          height: Math.min(width * 0.88, 580),
        });
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section id="destinations" className="globe-section-wrapper">
      <div className="globe-container">
        <div className="globe-header-content">
          <span className="globe-tag">Origin to destination</span>
          <h2 className="globe-heading">
            From Sudan, with a network built to deliver.
          </h2>
          <p className="globe-sub">
            Our export network reaches 12+ destinations across Europe, the
            Middle East, Africa, Asia, and the Americas. Explore where we
            operate, then bring us your destination and requirements.
          </p>
          <div className="globe-network-stats">
            <div className="globe-stat">
              <span className="globe-stat-value">13<span>+</span></span>
              <span className="globe-stat-label">Years exporting</span>
            </div>
            <div className="globe-stat">
              <span className="globe-stat-value">12<span>+</span></span>
              <span className="globe-stat-label">Export destinations</span>
            </div>
            <div className="globe-stat">
              <span className="globe-stat-value">Sudan</span>
              <span className="globe-stat-label">Direct origin</span>
            </div>
          </div>
          <p className="globe-reassurance">
            From product details to shipping arrangements, our trade desk is
            ready to help you plan the next step.
          </p>
          <Link to="/contact" className="globe-cta">
            Tell us where you need it <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div
          className="globe-canvas-wrapper"
          ref={containerRef}
          role="group"
          aria-label="Export route globe, centered on Khartoum, Sudan, with routes to international destinations"
        >
          <div className="globe-origin-chip">
            <span className="globe-origin-chip-dot" />
            <span className="globe-origin-chip-copy">
              <span>Headquarters &amp; origin</span>
              <strong>Khartoum, Sudan</strong>
            </span>
          </div>
          <Globe
            ref={globeEl}
            width={globeSize.width}
            height={globeSize.height}
            onGlobeReady={() => {
              const controls = globeEl.current.controls();
              if (controls) {
                controls.autoRotate = false;
                controls.enableZoom = false;
              }
              globeEl.current.pointOfView(
                { lat: 17, lng: 32, altitude: 1.4 },
                900,
              );
            }}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)"
            arcsData={tradeRoutes}
            arcStartLat={(d) => d.startLat}
            arcStartLng={(d) => d.startLng}
            arcEndLat={(d) => d.endLat}
            arcEndLng={(d) => d.endLng}
            arcColor={() => [
              "rgba(240, 202, 115, 0.88)",
              "rgba(240, 202, 115, 0.12)",
            ]}
            arcStroke={0.45}
            arcAltitudeAutoScale={0.3}
            arcDashLength={0.24}
            arcDashGap={0.9}
            arcDashAnimateTime={2600}
            pointsData={tradePins}
            pointLat={(d) => d.lat}
            pointLng={(d) => d.lng}
            pointColor={(d) => d.color}
            pointAltitude={(d) => (d.type === "origin" ? 0.028 : 0.014)}
            pointRadius={(d) => (d.type === "origin" ? 0.32 : 0.18)}
            pointsMerge={false}
            ringsData={[origin]}
            ringLat={(d) => d.lat}
            ringLng={(d) => d.lng}
            ringColor={() => (t) => `rgba(240, 202, 115, ${1 - t})`}
            ringMaxRadius={1.6}
            ringPropagationSpeed={0.7}
            ringRepeatPeriod={1800}
            pointLabel={(d) => `
              <div style="background: #0b1c12; color: #fbf8f0; padding: 10px 13px; border: 1px solid rgba(240, 202, 115, .65); border-radius: 6px; font-family: sans-serif; font-size: 12px; box-shadow: 0 12px 30px rgba(0,0,0,.4);">
                <strong style="color: #fae9be;">${d.name}</strong><br/>
                <span style="color: #b7c0b5; font-size: 10px;">${d.type === "origin" ? "Headquarters & source" : "Export destination"}</span>
              </div>
            `}
          />
          <div className="globe-legend">
            <div className="legend-item">
              <span className="legend-dot origin"></span>
              <span>Headquarters &amp; origin</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot market"></span>
              <span>Export destinations</span>
            </div>
          </div>
        </div>

        <div className="globe-regions" role="group" aria-label="Export regions">
          <span className="globe-regions-label">Markets across</span>
          <span>Europe</span>
          <span>Middle East</span>
          <span>Africa</span>
          <span>Asia</span>
          <span>The Americas</span>
        </div>

        <DestinationTicker />
      </div>
    </section>
  );
}
