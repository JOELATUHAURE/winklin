// src/components/ScheduleModal.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

export interface ScheduleData {
  date: string;
  time: string;
}

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (data: ScheduleData) => void;
}

export default function ScheduleModal({ isOpen, onClose, onComplete }: ScheduleModalProps) {
  const [form, setForm] = useState<ScheduleData>({ date: '', time: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(form);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-surface-900 rounded-xl p-6 w-full max-w-md relative">
        <button onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-surface-200 dark:hover:bg-surface-700"
          aria-label="Close schedule form">
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-semibold mb-4">Schedule Service</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Preferred Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full mt-4"
            disabled={!form.date || !form.time}
          >
            Confirm Schedule
          </button>
        </form>
      </div>
    </div>
  );
}
