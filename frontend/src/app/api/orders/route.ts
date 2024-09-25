import { NextResponse } from "next/server";
import { get, post } from "@/http/fetch";
import { FieldError, Order } from "@/types/entities";

const baseUrl = process.env.SERVER_URL;

export type GetOrdersResponseDto = {
  errors?: FieldError[];
  orders?: Order[];
};

export async function GET() {
  const data = await get<GetOrdersResponseDto>(`${baseUrl}/orders`);
  return NextResponse.json({
    data,
  });
}

export async function POST(request: Request) {
  const postData = await request.json();
  const data = await post<GetOrdersResponseDto>(`${baseUrl}/orders`, postData);
  return NextResponse.json({
    data,
  });
}
