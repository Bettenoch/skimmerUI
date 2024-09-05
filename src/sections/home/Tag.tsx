

const Tag = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse w-full justify-between items-center">
        <div className="flex flex-col gap-8 p-6">
            <h4 className="text-3xl font-medium text-[#D4AF37]">
            Bring AI automation to any business system
            </h4>
            <p className="text-center text-stone-200">
                Learn how AI can automate tasks, save time, and improve operational efficiency in your business.
            </p>
        </div>
        <div className="flex items-center p-6">
            <img src="/illustrations/codeBg.png" alt="person coding" className="" />
        </div>

    </div>
  )
}

export default Tag