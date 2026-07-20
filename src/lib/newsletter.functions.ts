import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().trim().email().max(254),
      source: z.string().max(64).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const email = data.email.toLowerCase();
    const { error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .insert({ email, source: data.source ?? "website" });
    if (error) {
      // Unique-violation → already subscribed; treat as success.
      if ((error as { code?: string }).code === "23505") {
        return { ok: true, alreadySubscribed: true } as const;
      }
      console.error("newsletter subscribe failed", error);
      throw new Error("Could not add your email. Please try again.");
    }
    return { ok: true, alreadySubscribed: false } as const;
  });