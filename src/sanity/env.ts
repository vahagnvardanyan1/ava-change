const requireEnv = ({ name, value }: { name: string; value?: string }) => {
  if (!value) {
    throw new Error(
      `Missing environment variable ${name}. Copy .env.example to .env.local and fill it in.`,
    );
  }

  return value;
};

// Each variable is referenced literally so Next.js can inline it in the browser bundle.
export const SANITY_PROJECT_ID = requireEnv({
  name: "NEXT_PUBLIC_SANITY_PROJECT_ID",
  value: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
});

export const SANITY_DATASET = requireEnv({
  name: "NEXT_PUBLIC_SANITY_DATASET",
  value: process.env.NEXT_PUBLIC_SANITY_DATASET,
});

export const SANITY_API_VERSION = "2026-11-01";
