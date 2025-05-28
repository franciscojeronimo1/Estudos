import { NextResponse } from "next/server";

let tarefas = [' Comprar coca', 'estudar nextJS']

export async function GET(request: Request) {
    return NextResponse.json(tarefas)
}