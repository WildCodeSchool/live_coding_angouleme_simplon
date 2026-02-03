import { useLocation, useParams } from "react-router-dom";
import "./user-details.css";

export default function UserDetails() {
  const { id } = useParams();
  const location = useLocation();
  console.log("location :>> ", location);

  console.log("id :>> ", id);
  return <div>UserDetails</div>;
}
