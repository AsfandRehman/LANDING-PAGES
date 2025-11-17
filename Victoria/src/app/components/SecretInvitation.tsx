"use client";

export default function SecretInvitation() {
  return (
    <section className="relative w-full bg-[var(--background)] text-[var(--foreground)] py-20 px-6 md:px-24 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 z-10 relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-cormorant leading-tight">
          Want me to let you in on a{" "}
          <span className="italic text-[var(--accent)]">juicy secret</span>? <br />
          <span className="text-lg md:text-xl block mt-2">Keep reading.</span>
        </h2>

        {/* Paragraphs */}
      <p className="text-xl md:text-2xl lg:text-3xl font-cormorant leading-relaxed text-[var(--foreground)]/90">
  Hi there, my love. <br />
  I’m Victoria Rose, and music is my life force. I’m not being hyperbolic when I say that.
  Having been diagnosed with bipolar disorder as a teen, I quickly poured my
  larger-than-life emotions into songwriting. I have since packaged them up and tied them in
  a little black bow for you. I hope you enjoy them.
</p>

<p className="text-xl md:text-2xl lg:text-3xl font-cormorant leading-relaxed text-[var(--foreground)]/90">
  But more importantly, I hope we can get to know each other a little better through this
  vessel we call music.
</p>

<p className="text-xl md:text-2xl lg:text-3xl font-cormorant leading-relaxed text-[var(--foreground)]/90">
  Because of that, I’d like to make a deal with you. Secrets unite people, right? I’ll tell
  you a <span className="italic text-[var(--accent)]">big secret of mine</span> in the first email I
  send out through my mailing list. Sign up by{" "}
  <span className="underline underline-offset-4 decoration-[var(--primary)]">September 20th</span>,
  my birthday, to find out!
</p>


      
      </div>
    </section>
  );
}
