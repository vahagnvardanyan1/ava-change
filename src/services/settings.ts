import { cache } from "react";

import { sanityClient } from "@/sanity/client";
import { SETTINGS_DOCUMENT_ID } from "@/sanity/constants";

const FEE_QUERY = `*[_id == $id][0].feePercentage`;

// cache() lets Hero and Faq share one Sanity request per page render.
export const fetchFeePercentage = cache(async (): Promise<number> => {
  const fee = await sanityClient.fetch<number | null>(
    FEE_QUERY,
    { id: SETTINGS_DOCUMENT_ID },
    // Sanity's CDN can keep serving the old fee for a minute or two after a
    // publish; the live API is always current.
    { cache: "no-store", useCdn: false },
  );

  if (fee === null) {
    throw new Error(
      "Fetching fee from Sanity failed: the Site settings document has no published feePercentage. Set it in /studio.",
    );
  }

  return fee;
});
