import {NextRequest} from "next/server";
import {Resend} from "resend";
import {ContactEmail} from "@/components/EmailTemplate";
import {ReactNode} from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST (req: NextRequest) {
  let body: unknown;
  
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify(e), {status: 400})
  }
  console.log(body)
  const {name, email, message} = body;
  if (!name || !email || !message) {
    return new Response(JSON.stringify("Formulaire invalide"), {status: 400})
  }
  
  await resend.emails.send({
    from: "Portfolio <noreply@winali.fr>",
    to: ['brandonricci4@gmail.com'],
    subject: "Demande de contact",
    react: ContactEmail(name, email, message) as ReactNode
  })
  
  
  return new Response(JSON.stringify("Message envoyé"), {status: 201})
}