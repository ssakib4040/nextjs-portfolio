import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0e27",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1f4e 0%, #0a0e27 100%)",
          fontFamily: "Outfit",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0D6EFD 0%, #6610f2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "64px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            SS
          </div>
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Sadman Sakib
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#0D6EFD",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Software Engineer & Full-Stack Developer
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "24px",
            color: "#6b7280",
          }}
        >
          ssakib.me
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
