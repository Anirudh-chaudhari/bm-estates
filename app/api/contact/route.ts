import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Sending to webhook:", JSON.stringify(body));

    const response = await fetch("https://oyik.cloud/webhook/BMESTATE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();
    console.log("Webhook response:", responseText);

    if (response.ok || response.status === 200) {
      return NextResponse.json({ success: true, message: "Form submitted successfully" });
    } else {
      return NextResponse.json({ error: "Webhook failed", details: responseText }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Server error", details: String(error) }, { status: 200 });
  }
}
