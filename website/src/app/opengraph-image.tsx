import { ImageResponse } from "next/og";
export const alt = "NAHTREEK — From plot to home";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#081F3D",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#FFC107",
            letterSpacing: 6,
            display: "flex",
          }}
        >
          NAHTREEK · FROM PLOT TO HOME
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 700,
            marginTop: 42,
            display: "flex",
          }}
        >
          Build Better.
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 700,
            color: "#FFC107",
            display: "flex",
          }}
        >
          Connect Smarter.
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#C8D5E4",
            marginTop: 38,
            display: "flex",
          }}
        >
          Civil engineering & property services
        </div>
      </div>
    ),
    size,
  );
}
