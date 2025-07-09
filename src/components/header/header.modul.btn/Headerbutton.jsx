import { useState } from 'react';
import { BsFileEarmarkPlusFill } from 'react-icons/bs';

const Headerbutton = () => {
  const [showModal, setShowModal] = useState(false);
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

    const infodata = [...data, info];
    setData(infodata);
    localStorage.setItem('localdata', JSON.stringify(infodata));

    setName('');
    setAge('');
    setJob('');
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="px-7 py-3 border-2 rounded-2xl cursor-pointer text-3xl text-white hover:bg-white hover:text-green-500 duration-300"
      >
        <BsFileEarmarkPlusFill />
      </button>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000078] z-10"
          ></div>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-w-[400px] w-full border-2 border-green-300 bg-white p-5 rounded-2xl text-black ">
            <h2 className="text-center text-3xl font-semibold">
              Add Product Info
            </h2>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name..."
              className="border w-full outline-0 focus:border-green-500 focus:outline-2 outline-green-400 duration-150 py-3 rounded-2xl text-lg font-semibold indent-5 my-3"
            />
            <input
              onChange={(e) => setAge(e.target.value)}
              value={age}
              type="number"
              placeholder="Age..."
              className="border w-full outline-0 focus:border-green-500 focus:outline-2 outline-green-400 duration-150 py-3 rounded-2xl text-lg font-semibold indent-5 my-3"
            />
            <input
              onChange={(e) => setJob(e.target.value)}
              value={job}
              type="text"
              placeholder="Job..."
              className="border w-full outline-0 focus:border-green-500 focus:outline-2 outline-green-400 duration-150 py-3 rounded-2xl text-lg font-semibold indent-5 my-3"
            />
            <div className="flex items-center justify-center gap-5 font-semibold mt-5">
              <button
                onClick={handleChange}
                type="button"
                className="w-1/2 py-2.5 rounded-2xl bg-green-500 text-white hover:bg-white hover:outline hover:outline-green-500 hover:text-green-500 duration-150 cursor-pointer"
              >
                Submit
              </button>
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="w-1/2 py-2.5 rounded-2xl bg-green-500 text-white hover:bg-white hover:outline hover:outline-green-500 hover:text-green-500 duration-150 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Headerbutton;
