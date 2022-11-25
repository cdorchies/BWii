import React, { useState } from "react";
import CreateClientStyle from "./styles";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function CreateClient({ config }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <CreateClientStyle>
      <nav className="navigation-new-client">
        <p>
          <span>
            <Link to="/">Accueil</Link>
          </span>{" "}
          <span className="chevron">
            <HiChevronRight />
          </span>{" "}
          <span>Créer un nouveau client</span>
        </p>
      </nav>

      <article id="create-new-client">
        <h1>CRÉER UN NOUVEAU CLIENT</h1>

        <div className="tab">
          <div className="tab-headers">
            {config.map((entry, index) => (
              <div
                key={index}
                className={`tab-header ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {entry.header}
              </div>
            ))}
          </div>
          <div className="tab-body">{config[activeTab].component}</div>
        </div>
      </article>
    </CreateClientStyle>
  );
}
