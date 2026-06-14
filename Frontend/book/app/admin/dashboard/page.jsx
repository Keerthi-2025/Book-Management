


export default function AdminDashboard () {

    return(
        <div className="bg-gray-500 min-h-screen">

        
        <div className="">
        <h1 className="text-black font-bold flex justify-center">Admin Dashboard</h1>
    </div>

        <div className="grid grid-cols-2 gap-2">
            <div className="text-white font-bold border p-4 mt-2 bg-black flex justify-center rounded-2xl">
                <h2>Total Users</h2>
            </div>


            <div className="text-white bg-black border flex justify-center font-bold p-4 mt-2 rounded-2xl">
                <h2>Total Books</h2>
            </div>
        </div>
    
    </div> 
    )
}