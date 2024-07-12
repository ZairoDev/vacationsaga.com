import React, { useEffect, useRef } from "react";

const PlacesAutocomplete: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const loadScript = (url: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initAutocomplete = () => {
      if (inputRef.current) {
        const autocomplete = new google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["geocode"],
          }
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          console.log("Selected place:", place);
        });
      }
    };

    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=<YOUR_API_KEY>&libraries=places`
    )
      .then(initAutocomplete)
      .catch((error) => {
        console.error("Error loading Google Maps script:", error);
      });
  }, []);

  return (
    <div
      style={{
        padding: "25px",
        backgroundColor: "#f0f1f3",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter an address"
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
    </div>
  );
};

export default PlacesAutocomplete;
