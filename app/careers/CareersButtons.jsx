"use client";

import s from "./careers.module.css";

export function ApplyNowButton() {
    return (
        <button
            className={s.applyBtn}
            onClick={() =>
                document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
            }
        >
            Apply Now
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </button>
    );
}

export function OpenCallCta() {
    return (
        <button
            className={s.openCallCta}
            onClick={() =>
                document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
            }
        >
            Send General Application
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </button>
    );
}
