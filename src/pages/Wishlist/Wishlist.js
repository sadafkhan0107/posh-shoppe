import { Fragment } from "react"
import { Navbar } from "../../components/Navbar/Navbar"
import { useWishlist } from "../../context/wishlist-context";
import { HorizontalCard } from "../../components/ProductCard/HorizontalCard";
export const Wishlist = () => {
    const {wishlist} = useWishlist();
    return(
        <Fragment>
            <Navbar />
            <div className='wishlist-prods-container page'>
                {wishlist.length > 0 ? (
                    <>
                    <h1>My Wishlist</h1>
                    <main className='products-container'>
                       {
                         wishlist?.length > 0 && wishlist.map(product => <HorizontalCard key={product.id} product={product} ctaBtns = {['Add to Cart' , 'Remove from Wishlist']}/>)
                         }
                    </main>
                    </>
                ) : (<>
                <h1>Add items in wishlist</h1>
                </>)}
            </div>
        </Fragment>
    )
}