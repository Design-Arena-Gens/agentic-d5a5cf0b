import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get('name') || '');
  const email = String(form.get('email') || '');
  const company = String(form.get('company') || '');
  const budget = String(form.get('budget') || '');
  const message = String(form.get('message') || '');

  // Simple server-side validation
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }

  // In a real app, send email or push to CRM here
  console.log('[CONTACT]', { name, email, company, budget, message });

  return NextResponse.redirect(new URL('/?sent=1', request.url), { status: 303 });
}
