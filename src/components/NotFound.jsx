import { useRouteError } from "react-router-dom";
import "../../src/notFound.scss";
function NotFound() {
    const error = useRouteError();

    return (
        <>
            <div className="NotFound">
                <div className="text">
                    <h2 className="size">ERROR</h2>
                    <h1 className="size">404</h1>
                    <h3 className="size">{error.statusText || error.message}</h3>
                </div>

                <div className="astronaut">
                    <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" className="src" />
                </div>
            </div>
        </>
    )
}

export default NotFound;