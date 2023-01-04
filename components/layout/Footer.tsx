
const Footer = () => {
    return (
        <footer id="footer" className="text-center py-3">
            <div className="card-body">
                &copy; {new Date().getFullYear()} Copyright:
                <a href='https://github.com/cristianV0117'> Cristian Vasquez </a>
            </div>
        </footer>
    )
}

export default Footer
