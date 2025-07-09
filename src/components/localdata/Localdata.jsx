import image from '../../assets/images/title.svg';

const Localdata = () => {
  return (
    <>
      <h1 className="my-3 text-3xl font-semibold text-center">
        Local Storage data for show add item using header button and refresh
      </h1>
      <div className="container border-2 mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {JSON.parse(localStorage.getItem('localdata'))?.map((e) => (
          <article
            className="border-2 rounded-2xl p-5 text-center text-2xl font-semibold shadow-xl shadow-gray-500/5 hover:shadow-gray-500/15 duration-150"
            key={e.id}
          >
            <img
              className="size-[100px] block mx-auto"
              src={image}
              alt="card img"
            />
            <p className="my-5">
              <span className="text-green-500">Name:</span> {e.name}
            </p>
            <p>Age: {e.age}</p>
            <p>Job: {e.job}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default Localdata;
