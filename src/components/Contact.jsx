import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';
import { Mail, Phone, GitHub, LinkedIn } from './Icons';

const SERVICE_ID = 'service_r5p9p7e';
const TEMPLATE_ID = 'template_yw8hpzr';
const PUBLIC_KEY = 'EXTbFDV0ngaZ8OfJq';

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | missing | error

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('missing');
      return;
    }
    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        PUBLIC_KEY
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <h2>{t.contact.title}</h2>
          <p className="contact-lead">{t.contact.lead}</p>
          <ul className="contact-direct" aria-label={t.contact.direct}>
            <li><a href={`mailto:${personal.email}`}><Mail />{personal.email}</a></li>
            <li><a href={`tel:${personal.phone.replace(/\s/g, '')}`}><Phone />{personal.phone}</a></li>
            <li><a href={personal.linkedin} target="_blank" rel="noreferrer"><LinkedIn />LinkedIn</a></li>
            <li><a href={personal.github} target="_blank" rel="noreferrer"><GitHub />GitHub</a></li>
          </ul>
        </div>

        {status === 'sent' ? (
          <div className="form-sent" role="status">
            <p>{t.contact.sent}</p>
            <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>
              {t.contact.sendAnother}
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="c-name">{t.contact.name}</label>
              <input id="c-name" name="name" autoComplete="name" value={form.name} onChange={onChange} placeholder={t.contact.namePh} required />
            </div>
            <div className="field">
              <label htmlFor="c-email">{t.contact.email}</label>
              <input id="c-email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} placeholder={t.contact.emailPh} required />
            </div>
            <div className="field">
              <label htmlFor="c-message">{t.contact.message}</label>
              <textarea id="c-message" name="message" value={form.message} onChange={onChange} placeholder={t.contact.messagePh} required />
            </div>
            {(status === 'missing' || status === 'error') && (
              <p className="form-msg" data-kind="error" role="alert">
                {status === 'missing' ? t.contact.missing : t.contact.error}
              </p>
            )}
            <div>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
