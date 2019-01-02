import React, {useState} from 'react';
import Layout from '../components/MyLayout';

const ProductCategoryRow = ({category}) => (
  <tr>
    <th colSpan="2">
      {category}
    </th>
  </tr>
);

const ProductRow = ({product}) => {
  const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductTable = ({filterText, inStockOnly, products}) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const SearchBar = ({filterText, inStockOnly, setFilterText, setInStockOnly}) => (
  <form>
    <input
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
    <p>
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => setInStockOnly(e.target.checked)}
      />
      {' '}
      Only show products in stock
    </p>
  </form>
);

const FilterableProductTable = ({products}) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <style jsx>{`
        margin-top: 20px;
      `}</style>
    </div>
  );
};


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
];

export default () => (
  <Layout title="TIR-Hooks">
    <FilterableProductTable products={PRODUCTS} />
  </Layout>
);
