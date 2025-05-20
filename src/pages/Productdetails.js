import { useParams } from "react-router-dom";

function Productdetails() {
  const params = useParams();
  return (
    <>
      <h1>Product details</h1>
      <p>{params.productid}</p>
    </>
  );
}
export default Productdetails;
