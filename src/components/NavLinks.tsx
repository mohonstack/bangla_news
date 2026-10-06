import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();

  const navs: Navs[] = data.data || [];
  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <nav className="sticky top-0 z-50 border-y border-base-300 bg-base-100 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 overflow-x-auto px-4 py-3">

          <Link
            href="/"
            className="whitespace-nowrap rounded-lg px-4 py-2 font-semibold transition hover:bg-primary hover:text-primary-content"
          >
            হোম
          </Link>

          {filteredNavs.map((nav) => (
            <Link
              key={nav.slug}
              href={`/category/${nav.slug}`}
              className="whitespace-nowrap rounded-lg px-4 py-2 transition hover:bg-primary hover:text-primary-content"
            >
              {nav.title}
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default NavLinks;