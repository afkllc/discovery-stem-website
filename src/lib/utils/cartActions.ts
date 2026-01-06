export async function addItem(selectedVariantId: string | undefined) {
  return "Shopping cart disabled";
}

export async function removeItem(lineId: string) {
  return "Shopping cart disabled";
}

export async function updateItemQuantity(payload: { lineId: string; variantId: string; quantity: number; }) {
  return "Shopping cart disabled";
}
