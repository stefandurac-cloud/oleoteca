"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-0"
    >
      <input
        type="email"
        placeholder="adresa ta de email"
        className="flex-1 bg-white border border-navy/15 px-6 py-4 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors duration-300"
      />
      <button
        type="submit"
        className="bg-navy text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-navy-light transition-colors duration-300 whitespace-nowrap"
      >
        Abonează-te
      </button>
    </form>
  );
}
