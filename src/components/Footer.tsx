
export default function Footer() {
  return (
    <footer className="border-t border-sleek-border pt-5 flex flex-col sm:flex-row justify-between items-center bg-transparent mt-8">
      <span className="text-[13px] text-sleek-sub mb-4 sm:mb-0">
        Interested in applying systems like these to your organization?
      </span>
      <a
        href="mailto:contact@library.systems"
        className="text-sleek-accent text-[13px] text-decoration-none font-medium hover:underline"
      >
        Contact Engineering →
      </a>
    </footer>
  );
}
