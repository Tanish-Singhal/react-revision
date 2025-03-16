const products = [
  { id: 1, name: "Product A", price: 89, category: "Clothing" },
  { id: 2, name: "Product B", price: 46, category: "Electronics" },
  { id: 3, name: "Product C", price: 54, category: "Clothing" },
  { id: 4, name: "Product D", price: 87, category: "Electronics" },
  { id: 5, name: "Product E", price: 135, category: "Electronics" },
];

const names = ["John", "Doe", "Jane", "Doe", "John"];

function App() {
  return (
    <div>
      <h2>Rendering Lists and Conditional Operators</h2>

      <h4>
        1. How does the map function work in React for rendering lists? Can you provide and example?
      </h4>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price} - Category: {product.category}
            </li>
          );
        })}
      </ul>

      <h4>2. How can you filter products with a specific category?</h4>
      <ul>
        {products
          .filter((product) => product.category === "Electronics")
          .map((product) => {
            return (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price} - Category: {product.category}
              </li>
            );
          })}
      </ul>

      <h4>3. How can you Render a summary of total prices for particles?</h4>
      <p>
        <ul>
          <li>
            Total Price: $
            {products.reduce((total, product) => {
              return total + product.price;
            }, 0)}
          </li>
        </ul>
      </p>

      <h4>
        4. Add discounted Price key with 10% discount to all the products with price more than $50
        and render it
      </h4>
      <ul>
        {products
          .map((product) => {
            if (product.price > 50) {
              return {
                ...product,
                discountedPrice: product.price * 0.9,
              };
            }
            return product;
          })
          .map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price} - Category: {product.category}{" "}
              {product.discountedPrice && (
                <span>- Discounted Price: ${product.discountedPrice}</span>
              )}
            </li>
          ))}
      </ul>

      <h4>5. How can you filter and render unique elements from an array using filter in React?</h4>
      <ul>
        {names
          .filter((name, index) => {
            return names.indexOf(name) === index;
          })
          .map((name) => {
            return <li key={name}>{name}</li>;
          })}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
