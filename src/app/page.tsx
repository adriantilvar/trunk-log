export default function Home() {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-4 h-full">
      <div className="bg-blue-100 p-4 xl:col-span-1 xl:h-full">
        <h1 className="text-2xl font-bold">Trunk Log</h1>
      </div>

      <div className="bg-amber-100 p-4 flex-1 xl:col-span-3 relative">
        <DialBar className="absolute top-0 -left-4 h-full w-4" />
        Log Info
      </div>
    </div>
  );
}

const DialBar = ({ className }: { className: string }) => {
  return (
    <svg className={className}>
      <defs>
        <pattern id="dialPattern" width="6" height="12" patternUnits="userSpaceOnUse">
          <path d="M 0,8 H 6,0" className="stroke-sky-900 xl:stroke-amber-900/20 dark:stroke-white stroke-2" fill="none"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dialPattern)"></rect>
    </svg>
  );
};
