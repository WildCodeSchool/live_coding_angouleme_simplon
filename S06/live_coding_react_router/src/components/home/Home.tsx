import "./home.css";
import { products } from "../../data/data";
import { Link } from "react-router-dom";
export interface IProducts {
  id: number;
  url_img: string;
  title: string;
  description: string;
}
export default function Home() {
  return (
    <div className="card">
      {products.map(({ id, url_img, title, description }: IProducts) => (
        <Link key={id} to={`/products/${id}`}>
          <div className="card-item">
            <img src={url_img} alt={title} />
            <div className="card-body">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
