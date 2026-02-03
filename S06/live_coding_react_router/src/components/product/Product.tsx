/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/data";
import type { IProducts } from "../home/Home";
import { useEffect } from "react";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const getProductIfExist: IProducts | undefined = products.find(
    (product) => product.id.toString() === id,
  );
  useEffect(() => {
    if (typeof getProductIfExist === "undefined") {
      navigate("/*");
    }
  }, [id]);

  return (
    <>
      {typeof getProductIfExist !== "undefined" && (
        <div className="card-item">
          <img src={getProductIfExist.url_img} alt={getProductIfExist.title} />
          <div className="card-body">
            <h2>{getProductIfExist.title}</h2>
            <p>{getProductIfExist.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
