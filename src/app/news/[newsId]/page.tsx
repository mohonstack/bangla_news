import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsDetails({ params }: { params: Promise<{ newsId: string }> }) {
  const { newsId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  const news = data.data;
  if (!news) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-base-200 py-8">
      {" "}
      <article className="container mx-auto max-w-5xl px-4">
        {" "}
        {/* News Card */}{" "}
        <div className="overflow-hidden rounded-2xl bg-base-100 shadow-xl">
          {" "}
          {/* Image */}{" "}
          {news.image && (
            <figure className="relative h-64 w-full sm:h-80 md:h-112.5">
              {" "}
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
                priority
              />{" "}
            </figure>
          )}{" "}
          {/* Content */}{" "}
          <div className="p-5 sm:p-8 md:p-10">
            {" "}
            {/* Category */}{" "}
            {news.category && (
              <div className="mb-4">
                {" "}
                <span className="badge badge-primary">
                  {" "}
                  {news.category}{" "}
                </span>{" "}
              </div>
            )}{" "}
            {/* Title */}{" "}
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {" "}
              {news.title}{" "}
            </h1>{" "}
            {/* Meta Information */}{" "}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-base-300 pb-5 text-sm text-base-content/60">
              {" "}
              {news.author && (
                <span>
                  {" "}
                  লেখক: <strong>{news.author}</strong>{" "}
                </span>
              )}{" "}
              {news.date && <span> {news.date} </span>}{" "}
            </div>{" "}
            {/* Article */}{" "}
            <div className="prose mt-8 max-w-none text-base leading-8 sm:text-lg">
              {" "}
              <p>{news.text}</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </article>{" "}
    </main>
  );
};
