import { memo, useState } from "react";
import CloudinaryUpload from "../utils/CloudinaryUpload";
import { Upload } from "lucide-react";
function NewArticle() {
  const [newArticle, setnewArticle] = useState({
    fileUrl: "",
    title: "",
    subHeading: "",
    description: "",
  });
  const { uploadImage } = CloudinaryUpload();
  const handlechange = (e) => {
    const { name, value, type, files } = e.target;
    setnewArticle((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const newFileUrl = await uploadImage(newArticle.fileUrl);
    if (newFileUrl) {
      console.log("file url is here ", newFileUrl);
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <div className=" border-b dark:border-gray-700 border-gray-200 py-3">
        <p className=" text-lg">Create a New Article</p>
      </div>
      <div className="py-10 flex flex-col  md:flex-row items-center justify-center lg:justify-between flex-wrap gap-4">
        <div className=" media_upload w-full sm:w-[70%] lg:w-[48%] ">
          <div className=" bg-gray-300  dark:bg-blue-50 border border-gray-300 dark:border-gray-600 bg-opacity-15 dark:bg-opacity-5 rounded-3xl p-3 sm:p-6">
            <div className=" dark:bg-gray-700 bg-gray-200 rounded-3xl  pt-7 p-5 text-center">
              <h3 className=" text-2xl font-bold ">Upload your files</h3>
              <p className=" text-gray-400 my-1">File should be JPG</p>
              <div className=" border-dashed border-gray-600 dark:border-gray-200 mt-10 border rounded-3xl flex flex-col items-center p-8">
                <label htmlFor="files">
                  <Upload className=" cursor-pointer w-12 h-12 my-5"></Upload>
                </label>
                <input
                  type="file"
                  onChange={handlechange}
                  name="fileUrl"
                  id="files"
                  className=" hidden"
                />
                <p className=" dark:text-gray-400 font-normal ">
                  Max file size 15MB
                </p>
                <p className="dark:text-gray-400 font-normal text-sm ">
                  Drag & Drop your file or
                </p>
                <label
                  htmlFor="files"
                  className=" cursor-pointer shadow-lg shadow-blue-200 dark:shadow-gray-600   px-6 py-2 rounded-md text-lg mt-5 dark:bg-gray-950 bg-blue-400 opacity-90 text-white"
                >
                  Browse File
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 w-full sm:w-[70%] rounded-2xl text-sm description_form border border-gray-300 dark:border-gray-600  lg:w-1/2 h-full">
          <p className=" font-bold mb-2">New article</p>
          <div className="">
            <p>Title</p>
            <input
              className=" w-full border-gray-400 dark:border-gray-600 my-2 bg-transparent border outline-none p-2 rounded-xl "
              type="text"
              name="title"
              value={newArticle.title}
              onChange={handlechange}
              id=""
              placeholder="Enter the Title"
            />
            <p>Sub heading</p>
            <input
              className=" w-full border-gray-400 dark:border-gray-600 my-2 bg-transparent border outline-none p-2 rounded-xl "
              type="text"
              name="subHeading"
              value={newArticle.subHeading}
              onChange={handlechange}
              id=""
              placeholder="write here"
            />
            <p> Description</p>
            <textarea
              className=" w-full border-gray-400 dark:border-gray-600  my-2 bg-transparent border outline-none p-2 rounded-xl "
              name="description"
              value={newArticle.descrition}
              onChange={handlechange}
              id=""
              rows="8"
            ></textarea>
          </div>
        </div>
        <div className=" w-full grid items-center mt-5">
          <button>
            <span className=" text-sm bg-gray-400 dark:bg-gray-600 px-4 py-2 rounded-md">
              Create Article
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default memo(NewArticle);
