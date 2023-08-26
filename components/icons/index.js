export const OverviewIcon = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <g clipPath="url(#a)">
      <path
        fill={active ? "#DDE2FF" : "#9FA2B4"}
        d="M15.523 8.941H8.544l4.648 4.648c.178.178.47.192.653.02a7.044 7.044 0 0 0 2.15-4.143.471.471 0 0 0-.472-.525Zm-.465-1.906A7.076 7.076 0 0 0 8.494.472.473.473 0 0 0 8 .948V7.53h6.582a.473.473 0 0 0 .476-.494Zm-8.47 1.906V1.962a.471.471 0 0 0-.524-.472 7.054 7.054 0 0 0-6.06 7.227c.128 3.769 3.373 6.86 7.144 6.812a7.004 7.004 0 0 0 3.978-1.295c.232-.165.248-.507.046-.708L6.588 8.94Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const UserIcon = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill={active ? "#DDE2FF" : "#9FA2B4"} >
    <path
      fill={active ? "#DDE2FF" : "#9FA2B4"}
      d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm2.994 1.019L9.5 15l-1-4.25L9.5 9h-3l1 1.75-1 4.25-1.494-5.981C2.778 9.125 1 10.947 1 13.2v1.3A1.5 1.5 0 0 0 2.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-1.3c0-2.253-1.778-4.075-4.006-4.181Z"
      opacity={0.4}
    />
  </svg>
)