import React, { createElement as h } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

// console.log( React.version );
// console.log( ReactDOM );

/* JSX Syntax */

function Avatar({ name, status = "offline", size = 64 }) {
  let iconPath = "";
  let statusMessage = "";

  switch (status) {
    case "offline":
      iconPath = "/icons/status-offline.svg";
      statusMessage = "오프라인";
      break;
    case "online":
      iconPath = "/icons/status-online.svg";
      statusMessage = "온라인";
      break;
    case "dont-disturb":
      iconPath = "/icons/status-dont-disturb.svg";
      statusMessage = "방해금지";
      break;
    case "away":
      iconPath = "/icons/status-away.svg";
      statusMessage = "자리비움";
      break;
  }
  const label = `${name} (${statusMessage})`;

  return (
    <li className="avatar">
      <figure aria-label={label} title={label}>
        <div className="cover">
          <img src={`/avatar/${name}.png`} alt="" />
        </div>
        <figcaption>
          <img src={iconPath} alt="" />
        </figcaption>
      </figure>
    </li>
  )
}




const container = document.getElementById('app');


if(container){
  const reactDomRoot = ReactDOM.createRoot(container);
  // reactDomRoot.render(h(AvatarPage));
}


































