function UserCreationPage() {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="w-full max-w-xl mx-auto bg-white p-10 rounded-lg shadow-lg">
                <div className="pb-8">
                    <h1 className="text-2xl font-medium text-gray-900 dark:text-black">Create a new user</h1>
                </div>
                <div className="mb-5">
                    <label htmlFor="user-first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                    <input type="text" id="user-first-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="user-last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                    <input type="text" id="user-last-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">User email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@grofile.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="user-organization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Organization</label>
                    <input type="text" id="user-organization" readOnly={true} className="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Organization" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="user-role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">User role</label>
                    <select id="user-role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                        <option defaultValue>**DYNAMIC INSERT HERE**</option>
                    </select>            
                </div>
                <div className="ml-auto text-right">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create user</button>
                </div>
            </form>
        </div>
    )
}

export default UserCreationPage