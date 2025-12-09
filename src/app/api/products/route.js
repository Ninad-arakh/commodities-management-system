import { NextResponse } from "next/server";
import { products } from "@/common/constants";

// GET → return all products
export async function GET() {
  return NextResponse.json(products, { status: 200 });
}

// POST → create a new product
export async function POST(req) {
  try {
    const body = await req.json();
    const newProduct = {
      id: products.length + 1,
      ...body,
    };

    products.push(newProduct);

    return NextResponse.json(
      { message: "Product added successfully", product: newProduct },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Invalid product data" },
      { status: 400 }
    );
  }
}