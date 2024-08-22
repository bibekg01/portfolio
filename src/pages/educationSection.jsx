
const EducationSection = () => {
  return (
    <div className="bg-white">
    <div className=" sm:p-10 ">   
      <div className="grid justify-center">
            <h1 className="border-b-4 border-black border-double sm:text-[3rem] text-[1.5rem] text-center font-bold tracking-widest text-gray-700">EDUCATIONAL BACKGROUND</h1>
      </div>
      <div className="w-full pt-20">
        <div data-aos="fade-left" className="border-r-4 border-gray-700 w-[50%] text-right px-5 pt-5 bg-slate-300 p-5 rounded-l-xl">
          <h1 className="sm:text-2xl text-lg font-semibold tracking-wider mb-1">Bachelors level</h1>
          <p className="sm:text-lg text-sm sm:pr-5 pr-1">
          <span className="font-semibold">Name of College:</span> Gauradaha Ag Campus <br />
          <span className="font-semibold">Degree:</span> Bachelors of Science in Agriculture <br />
          <span className="font-semibold">Year:</span> 2018-2023 <br />
          <span className="font-semibold">Division:</span>  First Division <br />
          <span className="font-semibold">Address:</span> Gauradaha-2, Jhapa, Koshi Province <br />
          <span className="font-semibold">College Link:</span> <a href="https://gac.tu.edu.np/" className="text-blue-700 underline italic">https://gac.tu.edu.np/</a> <br />
          </p>
        </div>
        <div data-aos="fade-right"  className="border-l-4 border-gray-700 w-[50%] ml-[49.8%] px-5 pt-5 bg-slate-300 p-5 rounded-r-xl">
          <h1 className="sm:text-xl text-lg font-semibold tracking-wider mb-1">Intermediate Level</h1>
          <p className="sm:text-lg text-sm sm:pl-5 pl-1">
          <span className="font-semibold">Name of College:</span> St. Xaviers College <br />
          <span className="font-semibold">Degree:</span> Plus 2, Science <br />
          <span className="font-semibold">Year:</span> 2015-2017 <br />
          <span className="font-semibold">Division:</span>  First Division <br />
          <span className="font-semibold">Address:</span> Maitighar, Kathmandu, Bagmati Province <br />
          <span className="font-semibold">College Link:</span> <a href="https://neb.sxc.edu.np/" className="text-blue-700 underline italic">https://neb.sxc.edu.np/</a> <br />
          </p>

        </div>
        <div data-aos="fade-left"  className="border-r-4 border-gray-700 w-[50%]  text-right px-5 pt-5 bg-slate-300 p-5 rounded-l-xl">
          <h1 className="sm:text-xl text-lg font-semibold tracking-wider mb-1">Secondary Level</h1>
          <p className="sm:text-lg text-sm sm:pr-5 pr-1">
          <span className="font-semibold">Name of College :</span> Shree Adarsha Bal Higher Secondary School <br />
          <span className="font-semibold">Degree:</span> School Leaving Certificate Level Examination <br />
          <span className="font-semibold">Year of Completion:</span> 2015 <br />
          <span className="font-semibold">Division:</span>  First Division with Distinction <br />
          <span className="font-semibold">Address:</span> Baretar, Lamjung, Gandaki Province <br />
          <span className="font-semibold sm:block hidden">College Link:</span> <a href="https://www.facebook.com/adarsha.bal" className="text-blue-700 underline italic sm:block hidden">https://www.facebook.com/adarsha.bal</a> <br />
          </p>
        </div>
      </div>

    </div>
    </div>
  )
}

export default EducationSection