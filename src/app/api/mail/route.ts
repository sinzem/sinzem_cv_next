import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {

    try {
        const {name, email, message} = await request.json();

        const transporter = nodemailer.createTransport({
            host: process.env.NEXT_PUBLIC_EMAIL_HOST,
            port: Number(process.env.NEXT_PUBLIC_EMAIL_PORT) || 587,
            secure: process.env.NEXT_PUBLIC_EMAIL_SECURE === "true",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
            },
        })

        const mailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL_FROM,
            to: process.env.NEXT_PUBLIC_EMAIL_TO,
            subject: `New message from ${name}`,
            text: message,
            html: `
                <div>
                    <h1>New message from CV on Vercel</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                </div>
            `,
        }

        await transporter.sendMail(mailOptions);
    
        return NextResponse.json({ message: "Sending successful" }, { status: 200 })
    } catch (error) {
        console.error("Error sending email:", error)
        return NextResponse.json({ error: "Error sending email" }, { status: 500 })
    }
} 

