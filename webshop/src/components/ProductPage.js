
import {Products} from "./Products";
import { ProductView } from "./ProductView";

// huvudsidan där Shop visas. Produkterna från produkts.js används i ProductView.js och visas här.
export const ProductPage = () => {
      return (
      <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>
      <div className="products">
        {Products.map((product) => (
          <ProductView data={product} />
        ))}
      </div>
    </div>)
}
