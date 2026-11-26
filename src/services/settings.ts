import { sanityClient } from "@/sanity/client";
import { SETTINGS_DOCUMENT_ID } from "@/sanity/constants";

const FEE_QUERY = `*[_id == $id][0].feePercentage`;

export const fetchFeePercentage = async (): Promise<number> => {
  const fee = await sanityClient.fetch<number | null>(
    FEE_QUERY,
    { id: SETTINGS_DOCUMENT_ID },
    // Read fresh on every request so a published fee shows on the next reload.
    { cache: "no-store" },
  );

  if (fee === null) {
    throw new Error(
      "Fetching fee from Sanity failed: the Site settings document has no published feePercentage. Set it in /studio.",
    );
  }

  return fee;
};
