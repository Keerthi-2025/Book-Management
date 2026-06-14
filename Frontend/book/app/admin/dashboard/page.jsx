


export default function AdminDashboard () {

    return(
        <div className="bg-gray-500 min-h-screen">

        
        <div className="flex-1 p-10">
        <h1 className="text-black font-bold flex justify-center">Admin Dashboard</h1>
    </div>

        <div className="grid grid-cols-2 gap-20">
            <div className="text-white font-bold border p-4 mt-2 w-100 bg-black flex justify-center rounded-2xl">
                <h2>Total Users</h2>
            </div>


            <div className="text-white bg-black border flex justify-center w-100 font-bold p-4 mt-2 rounded-2xl">
                <h2>Total Books</h2>
            </div>
        </div>
    
    </div> 
    )
}