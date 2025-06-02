function AboutPage() {
    return(
        <>
            <h1 className="text-3xl font-bold underline">About Page</h1>
            <br></br>
            <div>
                <table className="table-auto border-collapse border border-gray-400 ml-20">
                    <tbody>
                        <tr>
                            <td className="border border-gray-300"><p className="mr-4">Company name</p></td>
                            <td className="border border-gray-300"><input type="text"></input></td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300"><p className="mr-4">Management Representative</p></td>
                            <td className="border border-gray-300"><input type="text"></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AboutPage