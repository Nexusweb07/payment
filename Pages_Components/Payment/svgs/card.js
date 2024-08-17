const Upi = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="35px"
      height="35px"
    >
      <g transform="matrix(.35278 0 0 -.35278 30.588 .01)">
        <linearGradient
          id="fZ5QJO0zpePOIUpGT06DDa"
          x1="-67.013"
          x2="-35.864"
          y1="-20.175"
          y2="-52.601"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#21ad64" />
          <stop offset="1" stop-color="#088242" />
        </linearGradient>
        <path
          fill="url(#fZ5QJO0zpePOIUpGT06DDa)"
          d="M-3.488-12.991l26.973-53.638c0.605-1.203,0.349-2.66-0.629-3.586 l-56.7-53.632c-2.244-2.123-5.86,0.053-5.035,3.03L-9.152-13.546C-8.407-10.858-4.742-10.498-3.488-12.991z"
        />
      </g>
      <path
        d="M25.729,10.67l-7.631,27.536l13.43-12.698c0.661-0.625,0.837-1.629,0.429-2.44L25.729,10.67z"
        opacity=".05"
      />
      <path
        d="M25.53,11.388l-7.173,25.885l12.828-12.129c0.502-0.475,0.636-1.236,0.326-1.853L25.53,11.388z"
        opacity=".07"
      />
      <linearGradient
        id="fZ5QJO0zpePOIUpGT06DDb"
        x1="-3.965"
        x2="30.418"
        y1="4.688"
        y2="39.071"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fed100" />
        <stop offset="1" stop-color="#e36001" />
      </linearGradient>
      <path
        fill="url(#fZ5QJO0zpePOIUpGT06DDb)"
        d="M21.557,4.593l9.507,18.922c0.213,0.424,0.123,0.938-0.222,1.265L10.831,43.7	c-0.792,0.749-2.067-0.019-1.776-1.07L19.559,4.788C19.822,3.84,21.115,3.714,21.557,4.593z"
      />
    </svg>
  );
};

const Debit = () => {
  return (
    <img
      src="/assets/icons/icons8-magnetic-card-48.png"
      width={35}
      height={35}
    />
  );
};

const Bank = () => {
  return <img src="/assets/icons/icons8-bank-96.png" width={35} height={35} />;
};


export { Upi, Debit, Bank };
