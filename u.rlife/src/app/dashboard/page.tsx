import Header from "@/components/ui/header";

export default function Dashboard() {
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between mt-5">

            <div className=" text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left top-0">
                <Header/>
                <h1 className="text-3xl font-bold text-left leading-20">Dashboard</h1> <br/>
            </div>
        </main>
       
    </>
}