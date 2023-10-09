w

const RowComponent = ({ title, fetchURL, rowId}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

 const slideLeft=()=>{
    var slider=document.getElementById('slider'+rowId);
    slider.scrollLeft=slider.scrollLeft-500;
 }

 const slideRight=()=>{
    var slider=document.getElementById('slider'+rowId);
    slider.scrollLeft=slider.scrollLeft+500;
 }


  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FaChevronLeft className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0" size={40} onClick={slideLeft}/>
        <div
          id={"slider"+rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <MovieCard movie={movie} key={id} />
          ))}
        </div>
        <FaChevronRight className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0" size={40} onClick={slideRight}/>
      </div>
    </>
  );
};
export default RowComponent;
