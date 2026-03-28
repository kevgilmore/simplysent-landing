export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-10 bg-secondary border-t border-border/60">
      <div className="max-w-[80rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-logo text-lg font-bold logo-gradient">SimplySent</span>
        <p className="text-sm text-foreground/25">
          &copy; {new Date().getFullYear()} SimplySent. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
