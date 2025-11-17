'use client';

import { useSenderRender } from './useSenderRender'; // ✅ correct path
import SecretInvitation from '../components/SecretInvitation';

const FORM_ID = 'bYEYv2';

export default function CommunityPage() {
  // Render when container + library ready (no position change)
  useSenderRender(FORM_ID, `#sender-form-${FORM_ID}.sender-form-field`, { initialStatus: 'enabled' });

  return (
    <main className="bg-[#0b0c2a] text-white min-h-screen">
      <section className="w-full min-h-screen px-6 md:px-8 pt-28 pb-24">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="text-center text-red-600 font-serif tracking-wide text-3xl md:text-5xl">
            JOIN MY GARDEN
          </h1>
          <p className="text-center text-gray-300 mt-3 mb-10 max-w-2xl mx-auto">
            Be the first to know. Get exclusive drops, fan events, behind-the-scenes content, and more.
          </p>

          {/* ✅ EXACT markup Sender expects — position unchanged */}
          <div className="mt-2 flex justify-center">
            <div
              id={`sender-form-${FORM_ID}`}
              className="sender-form-field w-full md:max-w-lg"
              data-sender-form-id={FORM_ID}
              style={{ minHeight: 620, textAlign: 'left' }}
            />
          </div>
        </div>
      </section>

      <SecretInvitation />
    </main>
  );
}
