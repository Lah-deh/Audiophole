import { mutation } from "./_generated/server";

export const createOrder = mutation(async ({ db }, orderData) => {
  const id = await db.insert("orders", {
    ...orderData,
    createdAt: new Date().toISOString(),
  });
  return id;
});
