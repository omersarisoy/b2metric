function ChartMetrixCard({ title, value }) {
  return (
    <div className="flex flex-col border border-gray-lightest items-center justify-center lg:px-8 lg:py-7">
      <p className="text-gray-light w-60 text-center">{title}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}

export default ChartMetrixCard;
