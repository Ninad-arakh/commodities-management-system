import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  const users = [
    { email: "manager@ninad.com", password: "manager123", isManager: true },
    { email: "keeper@ninad.com", password: "keeper123", isManager: false },
  ];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const payload = {
    email: user.email,
    isManager: user.isManager,
    exp: Date.now() + 1000 * 60 * 60,
  };

  const token = Buffer.from(JSON.stringify(payload)).toString("base64");

  return NextResponse.json(
    { token, user: { email: user.email, isManager: user.isManager } },
    { status: 200 }
  );
}
