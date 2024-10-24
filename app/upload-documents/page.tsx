import getAllUsers from "@/lib/actions";

export default async function DocumentUploadPage(){
    return (
        <>
            <h1 className="text-center m-20">Upload your document here</h1>
            {await getAllUsers()}
        </>
    )
}