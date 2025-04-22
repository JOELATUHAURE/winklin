import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Service } from '../types';
import { cn } from '../lib/utils';

export interface SignupData {
  name: string;
  email: string;
  phone: string;
  selectedServices: string[]; 
  selectedPlan: string;
}

interface SignupModalProps {
  isOpen: boolean;
  services: Service[];
  onClose: () => void;
  onComplete: (data: SignupData) => void;
}

export default function SignupModal({ isOpen, services, onClose, onComplete }: SignupModalProps) {
  const [form, setForm] = useState<SignupData>({
    name: '', email: '', phone: '', selectedServices: [], selectedPlan: ''
  });

  // Build plan options based on selected services
  const planOptions = form.selectedServices.flatMap(id => {
    if (id === '1') return ['Basic Pickup','Standard Pickup','Premium Pickup'];
    if (id === '2') return ['Basic Clean','Deep Clean','Move‑Out Clean'];
    if (id === '3') return ['Office Lite','Office Pro','Office Platinum'];
    return [];
  });

  // If plan no longer valid, clear it
  useEffect(() => {
    if (!planOptions.includes(form.selectedPlan)) {
      setForm(f => ({ ...f, selectedPlan: '' }));
    }
  }, [planOptions]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    if (name === 'selectedServices') {
      setForm(f => {
        const s = new Set(f.selectedServices);
        checked ? s.add(value) : s.delete(value);
        return { ...f, selectedServices: Array.from(s) };
      });
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(form);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-surface-900 rounded-xl p-6 w-full max-w-lg relative">
        <button onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-surface-200 dark:hover:bg-surface-700"
          aria-label="Close signup form">
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-surface-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-surface-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-surface-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          {/* Services */}
          <fieldset>
            <legend className="text-sm font-medium">Choose Services</legend>
            <div className="mt-2 space-y-1">
              {services.map(s => (
                <label key={s.id} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="selectedServices"
                    value={s.id}
                    checked={form.selectedServices.includes(s.id)}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{s.title}</span>
                </label>
              ))}
            </div>
          </fieldset>
          {/* Plans */}
          {planOptions.length > 0 && (
            <div>
              <label className="block text-sm font-medium">Choose Plan</label>
              <select
                name="selectedPlan"
                value={form.selectedPlan}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-surface-300 rounded-lg px-3 py-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="" disabled>-- Select a plan --</option>
                {Array.from(new Set(planOptions)).map(plan => (
                  <option key={plan} value={plan}>{plan}</option>
                ))}
              </select>
            </div>
          )}
          <button
            type="submit"
            disabled={!form.selectedServices.length || !form.selectedPlan}
            className="btn-primary w-full mt-4 disabled:opacity-50"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
