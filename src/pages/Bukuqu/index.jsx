import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_DETAIL, ROUTE_PUSTAKA } from "../../constant/routes";
import { useLocalStorage } from "../../hooks/useStorage";

const Bukuqu = () => {
  const navigate = useNavigate();
  const [books] = useLocalStorage("books", []);

  const handleDetail = (book) => {
    navigate(ROUTE_DETAIL, { state: book });
  };
  return (
    <div className="w-full h-full">
      <div className="mx-4 my-2 text-xl font-bold">Daftar Buku yang disimpan</div>
      <div className="h-[95%] overflow-y-auto">
        <div className="grid grid-cols-12 gap-x-1">
          {books &&
            books.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center justify-center bg-white rounded-md col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 p-1"
              >
                <img src={item.cover_url} alt={item.title} className="w-32 rounded-md mb-1 cursor-pointer" onClick={() => handleDetail(item)} />
                <div className="font-bold text-base cursor-pointer" title={item.title} onClick={() => handleDetail(item)}>
                  {item.title}
                </div>
                <div className="text-sm ">{item.authors.join(", ")}</div>
              </div>
            ))}

          {!books || books.length === 0 ? (
            <div className="col-span-12 mx-4 my-2">
              <div>Anda belum menyimpan buku favorit anda!</div>
              <div>Ayo temukan buku favorit anda!!</div>
              <Link to={ROUTE_PUSTAKA}>
                <button className="my-3 px-3 py-2 bg-violet-300 rounded-md">
                  Gass <span className="text-lg">🚀</span>
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Bukuqu;
