import { NextResponse } from "next/server";

export async function POST(request: Request) {
    // const body = await request.json();
    // console.log(body);
    // const envData = process.env.NEXT_PUBLIC_GREETING;

    // return NextResponse.json({message: "zaebalo", data: envData});

    try {
        // Для JSON данных
        const body = await request.json()
        console.log("Тело запроса:", body)
    
        // Обработка данных
        const { name , email} = body
    
        // Возвращаем ответ
        return NextResponse.json({ message: "Пользователь создан", user: { name , email} }, { status: 201 })
      } catch (error) {
        console.error("Ошибка при обработке запроса:", error)
        return NextResponse.json({ error: "Ошибка при обработке запроса" }, { status: 400 })
      }
} 

