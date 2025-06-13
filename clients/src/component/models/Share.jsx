import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from "react-share";
import { Link, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function Share() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = "Check this out!";

  const copyToClipboard = () => {
    if (!shareUrl) return;

    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!", {
      position: "bottom-center",
      style: {
        borderRadius: "8px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className=" overflow-hidden">
      <Toaster />
      <div className=" bg-white dark:bg-gray-800  rounded-xl ">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold ">Share this</h3>
        </div>

        <div className=" grid  py-3 grid-cols-3 items-center">
          <button
            onClick={copyToClipboard}
            className="flex flex-col items-center p-3 space-y-2 transition-all duration-200 rounded-lg hover:bg-gray-50 hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600">
              <Link className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-600">Copy link</span>
          </button>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="flex flex-col items-center p-3 space-y-2 transition-all duration-200 rounded-lg hover:bg-gray-50 hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600">
              <Facebook className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-600">Facebook</span>
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="flex flex-col items-center p-3 space-y-2 transition-all duration-200 rounded-lg hover:bg-gray-50 hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-400">
              <Twitter className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-600">Twitter</span>
          </TwitterShareButton>
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            className="flex flex-col items-center p-3 space-y-2 transition-all duration-200 rounded-lg hover:bg-gray-50 hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-700">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-600">LinkedIn</span>
          </LinkedinShareButton>

          <EmailShareButton
            url={shareUrl}
            subject={title}
            className="flex flex-col items-center p-3 space-y-2 transition-all duration-200 rounded-lg hover:bg-gray-50 hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-600">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-600">Email</span>
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}

export default Share;
