const BelumBayar = () => {
  return (
    <div className="px-5 overflow-y-scroll max-h-[calc(100vh-100px)] md:max-h-[calc(100vh-200px)]">
      {Array.from({ length: 500 }, (_, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-4 my-2 border-b border-gray-200"
        >
          <p className="font-medium">Adam Levine</p>
          <p className="text-red-500 font-medium">Rp200.000</p>
        </div>
      ))}
      {/* <div className="flex justify-between items-center py-4 my-2 border-b border-gray-200">
        <p>Adam Levine</p>
        <p className="text-red-500 font-medium">Rp200.000</p>
      </div> */}
    </div>
  );
};

export default BelumBayar;
