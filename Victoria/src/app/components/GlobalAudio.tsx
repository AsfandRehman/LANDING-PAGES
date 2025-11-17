'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react'; // already using lucide in project

type GlobalAudioProps = {
  src: string;
  defaultVolume?: number; // 0..1
};

export default function GlobalAudio({ src, defaultVolume = 0.8 }: GlobalAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [userMuted, setUserMuted] = useState<boolean>(false);
  const [ready, setReady] = useState(false);

  // Load persisted mute preference
  useEffect(() => {
    const saved = localStorage.getItem('bgAudioMuted');
    setUserMuted(saved === 'true');
  }, []);

  // Initialize & satisfy autoplay policies
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = Math.min(Math.max(defaultVolume, 0), 1);

    // Start muted so autoplay is allowed
    audio.muted = true;
    audio.play().catch(() => {
      /* ignored: most browsers block unmuted autoplay */
    });

    // On first user gesture, respect user's saved preference and play
    const onFirstUserGesture = () => {
      if (!audio) return;
      audio.muted = userMuted;
      audio.play().catch(() => { /* noop */ });
      window.removeEventListener('pointerdown', onFirstUserGesture);
      window.removeEventListener('keydown', onFirstUserGesture);
      setReady(true);
    };

    window.addEventListener('pointerdown', onFirstUserGesture, { once: true });
    window.addEventListener('keydown', onFirstUserGesture, { once: true });

    // If the page was loaded with a gesture (rare), mark ready after a tiny delay
    const t = setTimeout(() => setReady(true), 300);

    return () => {
      clearTimeout(t);
      window.removeEventListener('pointerdown', onFirstUserGesture);
      window.removeEventListener('keydown', onFirstUserGesture);
    };
  }, [userMuted, defaultVolume]);

  // Toggle handler
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !userMuted;
    setUserMuted(next);
    localStorage.setItem('bgAudioMuted', String(next));
    audio.muted = next;
    if (!next) {
      // ensure playing when unmuted
      audio.play().catch(() => { /* noop */ });
    }
  };

  // Keyboard shortcut: "m" to toggle
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        toggleMute();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [userMuted]);

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      {/* Floating button UI */}
      <button
        type="button"
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-[60] rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-3 shadow-[0_6px_24px_rgba(0,0,0,0.35)] hover:bg-white/15 transition-colors"
        title={userMuted ? 'Unmute (M)' : 'Mute (M)'}
        aria-label={userMuted ? 'Unmute background music' : 'Mute background music'}
        aria-pressed={!userMuted}
      >
        {userMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        <span className="sr-only">{userMuted ? 'Unmute' : 'Mute'}</span>
      </button>

      {/* Optional: small ready state hint (hidden visually) */}
      <span aria-hidden className="hidden">{ready ? 'ready' : 'not-ready'}</span>
    </>
  );
}
