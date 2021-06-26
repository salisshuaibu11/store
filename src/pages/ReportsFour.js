export default function ReportsFour() {
  return (
    <>
      {/* Main content header */}
      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-xl font-bold whitespace-nowrap">Total Products</h1>
      </div>

      {/* Start content */}
      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          Commission 25%
        </article>

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          Commission 25%
        </article>

        <article className="p-4 bg-white cursor-pointer transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
          Commission 25%
        </article>
      </div>
      {/* ========== Start content end ========= */}
    </>
  );
}
