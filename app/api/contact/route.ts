import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Usamos la API Key proporcionada para crear el cliente de Resend.
const resend = new Resend('re_4ZqByq94_G3o78QR3MRLJfp5igzqidt1n');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { agenciaName, email, software } = body;

    if (!agenciaName || !email || !software) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Configuración del correo:
    // NOTA: Para correos externos (no verificados en Resend Free Tier),
    // es mandatorio usar 'onboarding@resend.dev' en el parámetro 'from'.
    // El 'to' DEBE ser el correo electrónico verificado en tu cuenta de Resend,
    // o puedes pasarlo por variable de entorno. Aquí temporalmente enviaremos a 
    // "tu-email-verificado@ejemplo.com" o al que deficiencias en process.env.
    
    const destinatario = process.env.CONTACT_EMAIL || 'thevega82@gmail.com'; 

    const data = await resend.emails.send({
      from: 'Salutaigestion Leads <onboarding@resend.dev>',
      to: [destinatario],
      subject: `Nuevo Lead Inbound: ${agenciaName}`,
      html: `
        <h2>Nuevo contacto desde Salutaigestion.com</h2>
        <p><strong>Agencia IA:</strong> ${agenciaName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Software bloqueante:</strong> ${software}</p>
      `,
    });

    if (data.error) {
       console.error("Resend API Error:", data.error);
       return NextResponse.json({ error: 'Fallo al despachar el correo' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error) {
    console.error("Endpoint Contact Error:", error);
    return NextResponse.json(
      { error: 'Error interno de servidor' },
      { status: 500 }
    );
  }
}
