import { NextResponse } from "next/server";

type WaitlistRequest = {
  name?: string;
  email?: string;
  productNumber?: string;
  productName?: string;
  size?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistRequest;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const productNumber = body.productNumber?.trim();
    const productName = body.productName?.trim();
    const size = body.size?.trim();

    if (!name || !email || !productNumber || !productName || !size) {
      return NextResponse.json(
        {
          success: false,
          message: "Required waitlist information is missing.",
        },
        { status: 400 },
      );
    }

    const googleAppsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!googleAppsScriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Apps Script URL is not configured.",
        },
        { status: 500 },
      );
    }

    const formData = new URLSearchParams({
      name,
      email,
      productNumber,
      productName,
      size,
    });

    const googleResponse = await fetch(googleAppsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formData.toString(),
      redirect: "follow",
      cache: "no-store",
    });

    const responseText = await googleResponse.text();

    if (!googleResponse.ok) {
      throw new Error(
        `Google Apps Script request failed: ${googleResponse.status}`,
      );
    }

    let googleResult: {
      success?: boolean;
      message?: string;
    };

    try {
      googleResult = JSON.parse(responseText);
    } catch {
      throw new Error("Google Apps Script returned an invalid response.");
    }

    if (!googleResult.success) {
      throw new Error(
        googleResult.message || "The waitlist entry could not be saved.",
      );
    }

    return NextResponse.json({
      success: true,
      message: "Waitlist entry saved.",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
      },
      { status: 500 },
    );
  }
}