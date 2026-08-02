import { NextResponse } from "next/server";
import { addGuestbook, listGuestbook } from "../../../lib/db";

export async function GET() {
  return NextResponse.json(listGuestbook());
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "请求格式不正确" }, { status: 400 });
  }
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!name || !message) {
    return NextResponse.json({ error: "昵称和留言不能为空" }, { status: 400 });
  }
  if (name.length > 30 || message.length > 500) {
    return NextResponse.json({ error: "昵称最长 30 字，留言最长 500 字" }, { status: 400 });
  }
  const row = addGuestbook(name, message);
  return NextResponse.json(row, { status: 201 });
}
