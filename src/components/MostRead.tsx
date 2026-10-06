interface MostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read"
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  const news: MostReadNews[] = data.data || [];

  return (
    <div className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm">
      {/* Header */}
      <div className="border-b border-base-300 px-5 py-4">
        <h2 className="flex items-center gap-2 text-lg font-bold text-red-700">
          <span className="h-5 w-1 rounded-full bg-red-600"></span>
          সর্বাধিক পঠিত
        </h2>
      </div>

      {/* News List */}
      <div className="divide-y divide-base-300">
        {news.map((n, i) => (
          <div
            key={n.id}
            className="group flex gap-4 px-5 py-4 transition-all duration-200 hover:bg-base-200"
          >
            {/* Number */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-xl font-extrabold text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
              {i + 1}
            </div>

            {/* Title */}
            <h3 className="line-clamp-2 self-center text-sm font-semibold leading-6 text-base-content transition-colors group-hover:text-red-700 sm:text-base">
              {n.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;