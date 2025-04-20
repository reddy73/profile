import { useState } from "react";

function ResumeViewer() {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-6">
      <button
  onClick={() => setShow(!show)}
  className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
>
  {show ? "Hide Resume" : "View Resume"}
</button>

<a
  href="./profile/resume.pdf"
  download
  className="ml-4 text-indigo-600 underline hover:text-indigo-800"
  target="_blank"
  rel="noopener noreferrer"
>
  Download PDF
</a>    

      {show && (
        <div style={{ height: "80vh", overflow: "auto" }} className="mt-4 w-full h-[80vh] border-2 border-gray-300 rounded">
          <iframe
            src="./profile/resume.pdf"
            title="Resume"
            width="100%"
            height="100%"
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px"
              }}
          />
        </div>
      )}
    </div>
  );
}

export default ResumeViewer;
