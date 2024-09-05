import Advert from "@/components/Advert";
// import Showcase from "@/components/Showcase";
import DoneIcon from "@mui/icons-material/Done";
import Tag from "./Tag";

const Features = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url(/background/confetti1.svg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col w-full items-center justify-center h-full">
        <div className="flex flex-col w-full items-center">
          <div className=" flex flex-col md:flex-row w-full justify-between items-center p-8">
            <div>
              <h3 className="text-teal-50">
                Unlock the power of AI-powered PDF analysis and OCR for free.
              </h3>
              <p className="text-sm text-gray-600 mt-4">
                Our advanced LLM technology combines the power of Llama, Index,
                Agentic RAGs, and OpenAI to deliver unparalleled insights.
              </p>
              <ul className="">
                <li className="text-gray-500 mt-4">
                  <DoneIcon className="text-amber-500 mr-2" />
                  <span>Upload Pdfs using cloud</span>
                </li>
                <li className="text-gray-500 mt-4">
                  <DoneIcon className="text-amber-500 mr-2" />
                  <span>
                    Optimize PDFs for faster loading and easier reading
                  </span>
                </li>
                <li className="text-gray-500 mt-4">
                  <DoneIcon className="text-amber-500 mr-2" />
                  <span>
                    OCR text from scanned documents for accurate results
                  </span>
                </li>
                <li className="text-gray-500 mt-4">
                  <DoneIcon className="text-amber-500 mr-2" />
                  <span>Get real-time feedback on your PDFs and images</span>
                </li>
                <li className="text-gray-500 mt-4">
                  <DoneIcon className="text-amber-500 mr-2" />
                  <span>Access AI-powered expertise with ease</span>
                </li>
              </ul>
            </div>
            <div>
              <Advert />
            </div>
          </div>
          <div>
            <Tag/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
