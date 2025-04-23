const SudahBayar = () => {
  return (
    <div className="px-5 overflow-y-auto max-h-[calc(100vh-100px)] md:max-h-[calc(100vh-200px)]">
      {Array.from({ length: 500 }, (_, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-1 my-2 border-b border-gray-200"
        >
          <p className="font-medium">Baskara</p>
          <div className="text-right">
            <p className="text-green-500 font-medium">+Rp300.000</p>
            <p className="text-gray-400 text-sm">01/01/2025</p>
          </div>
        </div>
      ))}
      {/* <div className="flex justify-between items-center py-4 my-2 border-b border-gray-200">
        <p>Adam Levine</p>
        <p className="text-red-500 font-medium">Rp200.000</p>
      </div> */}
    </div>
  );
};

export default SudahBayar;
