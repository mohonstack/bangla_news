import Link from "next/link";
const Footer = () => {
  return (
    <footer className="mt-16 bg-neutral text-neutral-content">
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        {/* Main Footer */}{" "}
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {" "}
          {/* Brand */}{" "}
          <div>
            {" "}
            <h2 className="text-2xl font-bold">সংবাদস্পন্দন </h2>{" "}
            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-content/70">
              {" "}
              দেশের সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা, বিনোদন এবং গুরুত্বপূর্ণ
              খবর জানতে আমাদের সাথেই থাকুন।{" "}
            </p>{" "}
          </div>{" "}
          {/* Quick Links */}{" "}
          <div>
            {" "}
            <h3 className="mb-4 text-lg font-semibold">
              {" "}
              গুরুত্বপূর্ণ লিংক{" "}
            </h3>{" "}
            <div className="flex flex-col gap-3 text-sm">
              {" "}
              <Link href="/" className="transition hover:text-primary">
                {" "}
                হোম{" "}
              </Link>{" "}
              <Link
                href="/category/politics"
                className="transition hover:text-primary"
              >
                {" "}
                রাজনীতি{" "}
              </Link>{" "}
              <Link
                href="/category/sports"
                className="transition hover:text-primary"
              >
                {" "}
                খেলাধুলা{" "}
              </Link>{" "}
              <Link
                href="/category/entertainment"
                className="transition hover:text-primary"
              >
                {" "}
                বিনোদন{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          {/* Contact / Social */}{" "}
          <div>
            {" "}
            <h3 className="mb-4 text-lg font-semibold">
              {" "}
              আমাদের সাথে থাকুন{" "}
            </h3>{" "}
            <p className="text-sm leading-6 text-neutral-content/70">
              {" "}
              সর্বশেষ সংবাদ ও আপডেট পেতে আমাদের সামাজিক যোগাযোগমাধ্যমে অনুসরণ
              করুন।{" "}
            </p>{" "}
            <div className="mt-5 flex gap-3">
              {" "}
              <a
                href="#"
                className="btn btn-circle btn-sm btn-primary"
                aria-label="Facebook"
              >
                {" "}
                f{" "}
              </a>{" "}
              <a
                href="#"
                className="btn btn-circle btn-sm btn-primary"
                aria-label="YouTube"
              >
                {" "}
                ▶{" "}
              </a>{" "}
              <a
                href="#"
                className="btn btn-circle btn-sm btn-primary"
                aria-label="Twitter"
              >
                {" "}
                X{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom Footer */}{" "}
        <div className="border-t border-neutral-content/10 py-5">
          {" "}
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-neutral-content/60 md:flex-row">
            {" "}
            <p>
              {" "}
              © {new Date().getFullYear()} সংবাদস্পন্দন. সর্বস্বত্ব
              সংরক্ষিত।{" "}
            </p>{" "}
            <div className="flex gap-5">
              {" "}
              <Link href="/privacy" className="hover:text-primary">
                {" "}
                গোপনীয়তা নীতি{" "}
              </Link>{" "}
              <Link href="/terms" className="hover:text-primary">
                {" "}
                ব্যবহারের শর্তাবলি{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
