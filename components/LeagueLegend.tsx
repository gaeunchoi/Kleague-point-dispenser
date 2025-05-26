function LeagueLegend() {
  return (
    <div className="flex flex-col gap-2 my-4 ml-6">
      <div className="flex items-center gap-2">
        <div className="min-w-2 min-h-2 bg-blue-500 rounded " />
        <span className="text-sm text-gray-600">다이렉트 승격</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="min-w-2 min-h-2 bg-green-400 rounded " />
        <span className="text-sm text-gray-600">플레이오프 진출</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="min-w-2 min-h-2 bg-orange-400 rounded " />
        <span className="text-sm text-gray-600">준플레이오프 진출</span>
      </div>
    </div>
  );
}

export default LeagueLegend;
