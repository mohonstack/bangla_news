import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Main News */}
      <Link href={`/news/${firstNews.id}`} className="group">
        <article className="card h-full overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <figure className="relative h-64 overflow-hidden sm:h-80">
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            {/* Category */}
            <div className="absolute left-4 top-4">
              <span className="rounded-md bg-red-600 px-3 py-1 text-sm font-semibold text-white shadow-md">
                {firstNews.category}
              </span>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h1 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                {firstNews.title}
              </h1>
            </div>
          </figure>

          <div className="card-body p-5">
            <p className="line-clamp-3 text-sm leading-6 text-base-content/70">
              {firstNews.description}
            </p>

            <div className="mt-2 flex items-center justify-between border-t border-base-300 pt-4">
              <span className="text-sm font-semibold text-red-600">
                বিস্তারিত পড়ুন
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </article>
      </Link>

      {/* Other News */}
      <div className="grid gap-3">
        {otherNews.slice(0, 4).map((on, i) => (
          <Link href={`/news/${on.id}`} key={on.id} className="group">
            <article className="flex gap-4 rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md">
              {/* Image */}
              <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-40">
                <Image
                  src={on.imageUrl}
                  alt={on.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <span className="mb-1 text-xs font-semibold text-red-600">
                  {on.category}
                </span>

                <h2 className="line-clamp-2 text-sm font-bold leading-5 transition-colors group-hover:text-red-700 sm:text-base sm:leading-6">
                  {on.title}
                </h2>

                <span className="mt-2 text-xs text-base-content/50">
                  বিস্তারিত পড়ুন →
                </span>
              </div>

              {/* Number */}
              <div className="hidden items-start pt-1 sm:flex">
                <span className="text-2xl font-extrabold text-base-content/10">
                  {String(i + 2).padStart(2, "0")}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;