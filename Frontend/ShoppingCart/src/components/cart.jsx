import { useEffect } from "react";

export function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cart").then(async (res) => {
      const data = await res.json();
      setCart(data);
    });
  });

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.item} width="100" />
              <h3>{item.item}</h3>
              <p>Price: ${item.price}</p>
              <p>Category: {item.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
