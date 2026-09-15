import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B132B",
          borderRadius: 40,
          position: "relative",
        }}
      >
        <span style={{ fontSize: 108, fontWeight: 700, color: "#FFFFFF" }}>S</span>
        <div
          style={{
            position: "absolute",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#C1622D",
            right: 46,
            bottom: 54,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
