/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BadgeCategory from "../../components/BadgeCategory";
import { ROUTE_DETAIL } from "../../constant/routes";
import { getBooks, getCategories } from "../../service/book";

const Pustaka = () => {
  const [books, setBooks] = useState([]);
  const [tempBooks, setTempBooks] = useState([]);
  const [loadingBook, setLoadingBook] = useState(false);

  const [categories, setCategories] = useState();
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  const [params, setParams] = useState({ page: 0, size: 24 });
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const navigate = useNavigate();
  const dataRef = useRef();

  const fetchCategory = async () => {
    setLoadingCategory(true);
    try {
      const response = await getCategories();
      if (response.status === 200) {
        setCategories(response.data);
        setLoadingCategory(false);
        setSelectedCategory(response.data[0].id);
      }
    } catch (error) {
      console.log(error);
      setLoadingCategory(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchBook = async (categoryId, params) => {
    if (!loadMore) setLoadingBook(true);

    try {
      const response = await getBooks({ categoryId, ...params });
      if (response.status === 200) {
        setBooks([...books, ...response.data]);
        setTempBooks([...books, ...response.data]);
        setLoadingBook(false);
        setLoadMore(false);
        if (response.data.length < params.size) {
          setIsLast(true);
        } else {
          setIsLast(false);
        }
      }
    } catch (error) {
      console.log(error.response);
      setLoadingBook(false);
      setIsLast(true);
      setLoadMore(false);
    }
  };

  const clickCategory = (id) => {
    if (id && selectedCategory !== id) {
      setSelectedCategory(id);
      setBooks([]);
      setTempBooks([]);
      setParams({ ...params, page: 0 });
      if (dataRef.current) dataRef.current.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchBook(selectedCategory, params);
    }
  }, [selectedCategory, params]);

  const handleScroll = async (event) => {
    let target = event.target;

    if (!loadMore && Math.round(target.scrollTop + target.offsetHeight) === target.scrollHeight && !isLast) {
      setLoadMore(true);
      target.scrollTo(0, target.scrollHeight);
      setParams({ ...params, page: params.page + 1 });
    }
  };

  const handleSearch = (keyword) => {
    let arrayBook = [...tempBooks];

    if (keyword) {
      arrayBook = arrayBook.filter(
        (item) => item.title.toLowerCase().includes(keyword.toLowerCase()) || item.authors.join().toLowerCase().includes(keyword.toLowerCase())
      );
      setBooks(arrayBook);
      setIsSearch(true);
    } else {
      setBooks(tempBooks);
      if (params.size > books.length) {
        setIsSearch(false);
      }
    }
  };

  const handleEnter = (event) => {
    if (event.keyCode === 13) handleSearch(keyword);
  };

  const handleDetail = (book) => {
    navigate(ROUTE_DETAIL, { state: book });
  };

  return (
    <div className="h-full px-2">
      <div className="sticky top-16 lg:top-0 mb-2 py-1 bg-white">
        <div className="flex pb-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-lg focus:outline-none shadow"
            placeholder="Cari buku berdasarkan judul atau nama pengarang"
            onChange={(e) => setKeyword(e.target.value)}
            onKeyUp={(e) => handleEnter(e)}
          />
          <button className="px-4 py-2 bg-violet-500 text-white rounded-lg ml-3 shadow" onClick={() => handleSearch(keyword)}>
            <FaSearch />
          </button>
        </div>
        <div className="flex overflow-x-auto whitespace-nowrap">
          {categories &&
            categories.length !== 0 &&
            categories.map((item) => (
              <BadgeCategory key={item.id} category={item} selectedCategory={selectedCategory} onClick={() => clickCategory(item.id)} />
            ))}
        </div>
      </div>

      <div className="w-full h-[90%] pb-8">
        {!loadingBook ? (
          books.length !== 0 && (
            <div className="h-full overflow-y-auto" onScroll={(event) => handleScroll(event)} ref={dataRef}>
              <div className="grid grid-cols-12 gap-x-1">
                {books.map((item) => (
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
                {!isSearch && !isLast && <div className="col-span-12 px-3">Sedang memuat...</div>}
              </div>
            </div>
          )
        ) : (
          <div className="col-span-12 px-3">Sedang memuat... </div>
        )}

        {loadingCategory && <div className="col-span-12 px-3">Sedang memuat... </div>}
      </div>
    </div>
  );
};

export default Pustaka;
