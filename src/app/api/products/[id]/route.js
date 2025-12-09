import { NextResponse } from "next/server";
import { products } from "@/common/constants";

// Enable dynamic imports for shared data
export const dynamic = "force-dynamic";

// ======================= GET SINGLE PRODUCT =======================
export async function GET(req, ctx) {
  const params = await ctx.params; 
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product, { status: 200 });
}

// ======================= UPDATE PRODUCT =======================
export async function PUT(req, ctx) {
  const params = await ctx.params; 
  const id = Number(params.id);
  const body = await req.json();

  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  // Merge updated fields
  products[productIndex] = {
    ...products[productIndex],
    ...body,
  };

  return NextResponse.json(
    {
      message: "Product updated successfully",
      product: products[productIndex],
    },
    { status: 200 }
  );
}

// ======================= DELETE PRODUCT =======================
export async function DELETE(req, ctx) {
  const params = await ctx.params; 
  const id = Number(params.id);

  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  const deleted = products.splice(productIndex, 1);

  return NextResponse.json(
    {
      message: "Product deleted",
      deleted: deleted[0],
    },
    { status: 200 }
  );
}
