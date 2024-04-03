import React from "react";

export default function Footer() {
  return (
    <footer className="footer p-10 text-base-content w-full m-auto rounded-lg">
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Livraison</a>
        <a className="link link-hover">Qualité</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Commande</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">A propos</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Nous rejoindre</a>
      </nav>
      <nav>
        <header className="footer-title">Legislation</header>
        <a className="link link-hover">Therme d'utilisation</a>
        <a className="link link-hover">Politique de confidentialité</a>
        <a className="link link-hover">Politique de cookies</a>
      </nav>
      <form>
        <header className="footer-title">Communication</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Entrer votre email</span>
          </label>
          <div id="footer" className="join w-full">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item w-full"
            />
            <button className="btn btn-primary join-item">Envoyer</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}
