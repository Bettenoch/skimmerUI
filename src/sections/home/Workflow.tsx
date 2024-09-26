const Workflow = () => {
  return (
    <section className="flex flex-col w-full justify-between items-center bg-light1 rounded-2xl">
      <h2 className="text-4xl font-bold text-center my-8 text-[#996515]">
        Simple, Fast & Captivating
      </h2>
      <div className="flex flex-col p-6 items-center ">
        <ul className="flex flex-col gap-2 text-stone-400 text-2xl">
          <li>Upload your pdf</li>
          <li>AI-Powered Analysis</li>
          <li>Get Instant Results</li>
          <li> Actionable Insights and Decisions</li>
        </ul>
        <div className="w-full flex flex-col ">
          <div className="w-full -mt-10">
            <img
              className="w-full"
              src="/illustrations/workflow.svg"
              alt="workflow"
            />
          </div>
          <div>
            <img
              className="w-full"
              src="/illustrations/workflow3.png"
              alt="workflow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
