
function Index({title,content}) {
    return (
        <div className="w-40 mt-[16px] py-4 bg-background-body rounded-3xl outline outline-2 outline-offset-[-2px] outline-border-gray-default inline-flex flex-col justify-center items-center overflow-hidden">
            <p className="self-stretch text-center justify-center text-text-default-default text-xs font-semibold  leading-normal">{title}</p>
            <p className="text-center justify-center text-text-primary-default text-xl font-bold  leading-10">{content}</p>
        </div>
    );
}

export default Index;