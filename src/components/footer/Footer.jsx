
const Footer = () => {
    const date = new Date();
    date.getFullYear
    return (
        <div>
            <footer className="bg-white py-4 mt-auto shadow-lg">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0">Copyright &copy; Showfolio {date?.getFullYear()}</div></div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer