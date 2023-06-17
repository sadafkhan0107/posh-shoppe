import { Fragment } from "react"
import { Navbar } from "../../components/Navbar/Navbar"
import { useWishlist } from "../../context/wishlist-context"
export const Wishlist = () => {
    const {wishlist} = useWishlist();
    return(
        <Fragment>
            <Navbar />
            <div className="wishlist-prod-container">
                {}
            </div>
        </Fragment>
    )
}