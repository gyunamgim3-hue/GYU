"use client";

import { FormEvent, useState } from "react";

type ProductActionsProps = {
  productNumber: string;
  productName: string;
};

export default function ProductActions({
  productNumber,
  productName,
}: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleWaitlistClick() {
    if (!selectedSize) {
      setMessage("Please select a size.");
      setIsFormOpen(false);
      return;
    }

    setMessage("");
    setIsFormOpen(true);
  }

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (!name.trim() || !email.trim()) {
    setMessage("Please enter your name and email.");
    return;
  }

  if (!selectedSize) {
    setMessage("Please select a size.");
    return;
  }

  setIsSubmitting(true);
  setMessage("");

  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        productNumber,
        productName,
        size: selectedSize,
      }),
    });

    const result = (await response.json()) as {
      success: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Waitlist submission failed.");
    }

    setIsSubmitted(true);
    setIsFormOpen(false);
    setMessage("");
  } catch (error) {
    setMessage(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again.",
    );
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <>
      <div style={{ marginTop: "36px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "11px",
            letterSpacing: "2px",
          }}
        >
          SIZE
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "8px",
            marginTop: "14px",
          }}
        >
          {["S", "M", "L", "XL"].map((size) => {
            const isSelected = selectedSize === size;

            return (
              <button
                key={size}
                type="button"
                onClick={() => {
                  setSelectedSize(size);
                  setMessage("");
                  setIsSubmitted(false);
                }}
                style={{
                  padding: "14px 8px",
                  border: "1px solid #111",
                  backgroundColor: isSelected ? "#111" : "#fff",
                  color: isSelected ? "#fff" : "#111",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={handleWaitlistClick}
        style={{
          width: "100%",
          marginTop: "32px",
          padding: "17px 20px",
          border: "1px solid #111",
          backgroundColor: "#111",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "2px",
          cursor: "pointer",
        }}
      >
        JOIN THE WAITLIST
      </button>

      {message && (
        <p
          style={{
            margin: "14px 0 0",
            fontSize: "12px",
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          {message}
        </p>
      )}

      {isFormOpen && !isSubmitted && (
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "24px",
            paddingTop: "24px",
            borderTop: "1px solid #ddd",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "11px",
              letterSpacing: "2px",
            }}
          >
            WAITLIST DETAILS
          </p>

          <label
            style={{
              display: "block",
              marginTop: "18px",
              fontSize: "11px",
              letterSpacing: "1.5px",
            }}
          >
            NAME
          </label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "14px 12px",
              border: "1px solid #bbb",
              backgroundColor: "#fff",
              color: "#111",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />

          <label
            style={{
              display: "block",
              marginTop: "18px",
              fontSize: "11px",
              letterSpacing: "1.5px",
            }}
          >
            EMAIL
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "14px 12px",
              border: "1px solid #bbb",
              backgroundColor: "#fff",
              color: "#111",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px 20px",
              border: "1px solid #111",
              backgroundColor: "#fff",
              color: "#111",
              fontSize: "12px",
              letterSpacing: "2px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
opacity: isSubmitting ? 0.6 : 1,
            }}
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </form>
      )}

      {isSubmitted && (
        <div
          style={{
            marginTop: "24px",
            padding: "20px",
            border: "1px solid #111",
            backgroundColor: "#f7f6f2",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              letterSpacing: "1.5px",
              lineHeight: 1.7,
            }}
          >
            THANK YOU, {name.toUpperCase()}.
            <br />
            YOU HAVE JOINED THE WAITLIST FOR SIZE {selectedSize}.
          </p>
        </div>
      )}
    </>
  );
}