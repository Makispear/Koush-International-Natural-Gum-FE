import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import DestinationTicker from "./destinationTicker"; // Import the ticker
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
      size: 1.5,
    },
    {
      name: "China (Shanghai / Guangzhou)",
      lat: 31.2304,
      lng: 121.4737,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "Germany (Hamburg)",
      lat: 53.5511,
      lng: 9.9937,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "France (Marseille / Paris)",
      lat: 48.8566,
      lng: 2.3522,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "Netherlands (Rotterdam)",
      lat: 51.9244,
      lng: 4.4777,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "Turkey (Istanbul)",
      lat: 41.0082,
      lng: 28.9784,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "Greece (Piraeus)",
      lat: 37.9838,
      lng: 23.7275,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "Dubai (UAE)",
      lat: 25.2048,
      lng: 55.2708,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "Saudi Arabia (Jeddah)",
      lat: 21.5433,
      lng: 39.1728,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "Iraq (Baghdad)",
      lat: 33.3152,
      lng: 44.3661,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "Tunisia (Tunis)",
      lat: 36.8065,
      lng: 10.1815,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "Morocco (Casablanca)",
      lat: 33.5731,
      lng: -7.5898,
      type: "destination",
      color: "#ffffff",
      size: 1,
    },
    {
      name: "United States (New York / Savannah)",
      lat: 40.7128,
      lng: -74.006,
      type: "destination",
      color: "#c59b27",
      size: 1.2,
    },
  ];

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth || 800;
        setGlobeSize({
          width: width,
          height: Math.min(width * 0.65, 500),
        });
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.0;
        controls.enableZoom = true;
      }
      globeEl.current.pointOfView({ lat: 25, lng: 20, altitude: 2.2 }, 500);
    }
  }, []);

  return (
    <section id="destinations" className="globe-section-wrapper">
      <div className="globe-container">
        <div className="globe-header-content">
          <span className="globe-tag">Global Trade Intelligence</span>
          <h2 className="globe-heading">Interactive Global Export Corridors</h2>
          <p className="globe-sub">
            Drag to rotate our operational trade network. Spanning 12+
            international jurisdictions from East African origin to global
            ports.
          </p>
        </div>

        <div className="globe-canvas-wrapper" ref={containerRef}>
          <Globe
            ref={globeEl}
            width={globeSize.width}
            height={globeSize.height}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)"
            pointsData={tradePins}
            pointLat={(d) => d.lat}
            pointLng={(d) => d.lng}
            pointColor={(d) => d.color}
            pointAltitude={0.06}
            pointRadius={(d) => d.size}
            pointsMerge={false}
            pointLabel={(d) => `
              <div style="background: #0d2315; color: #fff; padding: 8px 12px; border: 1px solid #c59b27; border-radius: 4px; font-family: sans-serif; font-size: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
                <strong style="color: #f3e5ab;">${d.name}</strong><br/>
                <span style="color: #a8a29e; font-size: 10px;">Port Sudan Direct Export Corridor</span>
              </div>
            `}
          />
        </div>

        <div className="globe-legend">
          <div className="legend-item">
            <span className="legend-dot origin"></span>
            <span>Origin Headquarters (Khartoum / Port Sudan)</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot market"></span>
            <span>Active Export Destination Market</span>
          </div>
        </div>

        <DestinationTicker />
      </div>
    </section>
  );
}
