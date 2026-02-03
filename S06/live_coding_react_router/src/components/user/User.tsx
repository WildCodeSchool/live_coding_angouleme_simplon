import { Link, Outlet, useLoaderData } from "react-router-dom";
import type { IUser } from "../types/interfaces";
import "./user.css";
export default function User() {
  const users: IUser[] = useLoaderData();
  if (!users) return <p>Aucune donnée utilisateur</p>;
  return (
    <>
      <div className="user-card">
        {users.map((user) => (
          <Link key={user.id} to={`${user.id}`}>
            <div className="user-card-item">
              <h2>{user.name}</h2>
              <p>
                <strong>Username :</strong> {user.username}
              </p>
              <p>
                <strong>Email :</strong> {user.email}
              </p>
              <p>
                <strong>Téléphone :</strong> {user.phone}
              </p>
              <p>
                <strong>Site web :</strong> {user.website}
              </p>

              {/* <h3>Adresse</h3>
          <p>
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city} – {user.address.zipcode}
          </p>
          <p>
            <strong>Coordonnées :</strong>
            <br />
            Lat: {user.address.geo.lat} | Lng: {user.address.geo.lng}
          </p>

          <h3>Entreprise</h3>
          <p>
            <strong>Nom :</strong> {user.company.name}
          </p>
          <p>
            <strong>Slogan :</strong> {user.company.catchPhrase}
          </p>
          <p>
            <strong>Activité :</strong> {user.company.bs}
          </p> */}
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
}
