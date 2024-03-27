import useFetch from "./useFetch";

const ApplyHooks = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data &&
                data.map((item,i) => {
                    return <p key={item.id}>{i+1}. {item.title.slice(0,1).toUpperCase()+item.title.slice(1)}</p>;
                })}
        </>
    );
};
export default ApplyHooks;