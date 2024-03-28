export default function main() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 w-full rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 text-sm -mb-1">In transit</span>
            <span className="text-4xl font-semibold">Cool Blue</span>
          </div>
          <div className="bg-orange-400 size-12 rounded-full" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-xs rounded-full py-1.5 px-2.5 text-white font-medium uppercase ">
            Today
          </span>
          <span>09:30-10:30u</span>
        </div>
        <div className=" bg-gray-200 rounded-full h-2 w-full" />
        <div className=" bg-green-400 rounded-full h-2 w-11 -mt-2 mb-1" />
        <div className="">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span>Delivered</span>
        </div>
      </div>
    </main>
  );
}
