import { Pencil } from "lucide-react";
function Personalinfo() {
  return (
    <div className=" ">
      <div className=" flex justify-between border-b border-gray-200 dark:border-gray-800 py-2 text-lg">
        <h3>Basic details</h3>
        <p className=" cursor-pointer dark:bg-gray-700 bg-gray-200 px-2    rounded-md flex items-center justify-center gap-2 text-sm">
          <Pencil className=" w-3 h-3" />
          Edit
        </p>
      </div>
      <div className="flex  *:w-full *:sm:w-[48%] *:md:w-[32%] justify-between flex-wrap gap-y-10 py-5 mt-5">
        <div className="">
          <p>First name</p>
          <input
            className=" w-full bg-transparent outline-none py-2 border-b border-gray-600 text-sm"
            type="text"
            name="firstName"
            placeholder="Abc"
          />
        </div>
        <div className="">
          <p>Last Name</p>
          <input
            className=" w-full bg-transparent outline-none py-2   border-b border-gray-600 text-sm"
            type="text"
            name="lastName"
            id=""
            placeholder="Xyz"
          />
        </div>
        <div className="">
          <p>Gender</p>
          <select
            className=" w-full  border-b outline-none py-2 border-gray-600 text-sm bg-black  bg-transparent"
            name=""
            id=""
          >
            <option value="Male" className=" text-gray-700">
              Male
            </option>
            <option value="Femaile" className=" text-gray-700">
              Female
            </option>
            <option value="Other" className=" text-gray-700">
              Other
            </option>
          </select>
        </div>
        <div className="">
          <p>Role</p>
          <input
            className=" w-full bg-transparent outline-none py-2   border-b border-gray-600 text-sm"
            type=" text"
            name="role"
            id=""
            placeholder=""
            value="User"
          />
        </div>
        <div className=" ">
          <p>Phone no.</p>
          <input
            className="  w-full bg-transparent outline-none py-2   border-b border-gray-600 text-sm"
            type=" text"
            name="phoneNo"
            id=""
            placeholder="9876543210"
          />
        </div>
        <div className="">
          <p>Secondary email</p>
          <input
            className="  w-full bg-transparent outline-none py-2 border-b border-gray-600 text-sm"
            type="text"
            name="abc@gmail.com"
            placeholder="Abc@gmail.com"
          />
        </div>

        <div className=" ">
          <p>Website</p>
          <input
            className=" w-full bg-transparent outline-none py-2  border-b border-gray-600 text-sm"
            type="text"
            name="location"
            placeholder="https://xyz.com"
            id=""
          />
        </div>
        <div className="">
          <p>Location</p>
          <input
            className=" w-full bg-transparent outline-none py-2  border-b border-gray-600 text-sm"
            type="text"
            name="location"
            placeholder="Berhamour,Odisha"
            id=""
          />
        </div>
      </div>
      <div className="">
        <p>About the User</p>
        <textarea
          className=" w-full bg-transparent outline-none py-2  border border-gray-600 text-sm rounded-md mt-3 p-3"
          name=""
          id=""
          rows="8"
          placeholder="abcd xyz pqrs...."
        ></textarea>
      </div>
    </div>
  );
}

export default Personalinfo;
