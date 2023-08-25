function ChartMetrixCard({ title, value }) {
  return (
    <div className="flex flex-col border-t border-r border-l border-gray-lightest h-20 items-center justify-center px-12 py-12">
      <p className="text-gray-light w-60 text-center">{title}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}

export default ChartMetrixCard;
