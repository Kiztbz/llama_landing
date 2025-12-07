"use client";

export default function ApplyButton() {
    return (
        <button
            onClick={() =>
                document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
            }
        >
            Apply Now
        </button>
    );
}
