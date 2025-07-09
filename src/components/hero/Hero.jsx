import { useState } from 'react';
import image from '../../assets/images/title.svg';

const Hero = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');
  const [data, setData] = useState([]);

  const handleChange = () => {
    if (!name.trim()) return null;
    if (!age.trim()) return null;
    if (!job.trim()) return null;
    const info = {
      id: new Date().getTime(),
      name,
      age: Number(age),
      job,
    };

    setData([...data, info]);

    setName('');
    setAge('');
    setJob('');
  };

  return (
    <>
      <div className="container mx-auto px-3 my-10">
        <div className="max-w-[400px] w-full flex flex-col block mx-auto">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name..."
            className="border w-full outline-0 focus:border-green-500 hover:border-green-500 focus:outline-2 outline-green-400 duration-150 py-3 rounded-2xl text-lg font-semibold indent-5 my-3"
          />
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            placeholder="Age..."
            className="border w-full outline-0 focus:border-green-500 hover:border-green-500 focus:outline-2 outline-green-400 duration-150 py-3 rounded-2xl text-lg font-semibold indent-5 my-3"
          />
          <input
            onChange={(e) => setJob(e.target.value)}
            value={job}
            type="text"
            placeholder="Job..."
            className="border w-full outline-0 focus:border-green-500 hover:border-green-500 focus:outline-2 outline-green-400 duration-150 py-3 rounded-2xl text-lg font-semibold indent-5 my-3"
          />
        </div>
        <button
          onClick={handleChange}
          type="button"
          className="w-[200px] py-2.5 rounded-2xl bg-green-500 block mx-auto text-white hover:bg-white hover:outline hover:outline-green-500 hover:text-green-500 duration-150 cursor-pointer"
        >
          Submit
        </button>
        <div className="container p-6 mx-auto my-5 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data?.map((e) => (
            <article
              className="border-2 rounded-2xl p-5 text-center text-2xl font-semibold shadow-xl shadow-gray-500/10 hover:shadow-gray-500/20 duration-150"
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
      </div>
    </>
  );
};

export default Hero;
