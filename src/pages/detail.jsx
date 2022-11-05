import React from "react";
import { FaChevronLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useStorage";

const Detail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [books, setBooks] = useLocalStorage("books", []);

  const handleFavorite = (book) => {
    if (book) setBooks([...books, book]);
  };

  const handleRelease = (book) => {
    let currentBooks = [...books];

    if (book) {
      currentBooks = currentBooks.filter((item) => item.id !== book.id);
      setBooks(currentBooks);
    }
  };

  const check = (id) => {
    if (books) {
      for (let index = 0; index < books.length; index++) {
        if (books[index].id === id) {
          return true;
        }
      }
    }

    return false;
  };

  return (
    <div className="px-2 py-4 pb-20 lg:pb-0">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-3 px-2 py-1 rounded-lg cursor-pointer hover:bg-violet-100" onClick={() => navigate(-1)}>
          <FaChevronLeft />
          <span>Kembali</span>
        </div>
        {!check(state.id) && (
          <div className="flex items-center gap-3 px-2 py-1 rounded-lg cursor-pointer hover:bg-violet-100" onClick={() => handleFavorite(state)}>
            <FaRegHeart />
            <span>Simpan</span>
          </div>
        )}

        {check(state.id) && (
          <div className="flex items-center gap-3 px-2 py-1 rounded-lg cursor-pointer hover:bg-violet-100" onClick={() => handleRelease(state)}>
            <FaHeart className="text-pink-500" />
            <span>Hapus dari Bukuqu</span>
          </div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-8 ">
        <img src={state.cover_url} alt={state.title} className="rounded-md w-36 border-2 border-violet-100 mx-auto lg:mx-0" />
        <div className="mx-4 lg:mx-0">
          <div className="font-bold text-xl lg:text-3xl text-center lg:text-left">{state.title}</div>
          <div className="font-bold text-slate-500 text-sm lg:text-md text-center lg:text-left">{state.authors.join(", ")}</div>
          <div className="font-bold text-slate-500 text-sm lg:text-md border-t-2 lg:border-0 mt-2 pt-2">📄 {state.sections.length} Bab</div>
          <div className="mt-4 lg:w-3/4">
            <div className="font-bold">Deskripsi</div>
            <div>{state.description}</div>
          </div>
        </div>
      </div>
      <div className="mt-4 lg:w-3/4 px-2 mx-2">
        <div className="font-bold text-lg mb-1">Isi buku</div>
        {state.sections &&
          state.sections.length !== 0 &&
          state.sections.map((item) => (
            <div key={item.title} className="list-item mb-2 ml-5">
              <div className="font-bold text-slate-700 text">{item.title}</div>
              <div className="text-sm">{item.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Detail;
