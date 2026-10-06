import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt?: string;
}

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`} className="group block">
      <article className="card h-full overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* Image */}
        <figure className="relative h-52 overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt || news.title || "সংবাদের ছবি"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category */}
          <div className="absolute left-4 top-4">
            <span className="badge badge-primary font-semibold shadow-md">
              {news.category}
            </span>
          </div>
        </figure>

        {/* Content */}
        <div className="card-body gap-3">

          {/* Title */}
          <h2 className="line-clamp-2 text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-primary">
            {news.title}
          </h2>

          {/* Description */}
          <p className="line-clamp-3 text-sm leading-6 text-base-content/70">
            {news.description}
          </p>

          {/* Read More */}
          <div className="mt-2 flex items-center justify-between border-t border-base-300 pt-4">
            <span className="text-sm font-semibold text-primary">
              বিস্তারিত পড়ুন
            </span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>
      </article>
    </Link>
  );
};

export default NewsCard;