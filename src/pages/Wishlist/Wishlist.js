import './Wishlist.css';
import { Fragment } from "react"
import { Navbar } from "../../components/Navbar/Navbar"
import { useWishlist } from "../../context/wishlist-context";
import { ProductCard } from '../../components/ProductCard/ProductCard';
export const Wishlist = () => {
    const {wishlist} = useWishlist();
    return(
        <Fragment>
            <Navbar />
            <div className='wishlist-prods-container page'>
                {wishlist.length > 0 ? (
                    <>
                    <h1>My Wishlist</h1>
                    <main className='wishlist-products d-flex gap-l'>
                       {
                         wishlist?.length > 0 && wishlist.map(product => <ProductCard key={product.id} product={product} from="wishlist"/>)
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