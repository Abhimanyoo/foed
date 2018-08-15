import styled from 'react-emotion';

export const Logo = () => (
  <svg
    width="100"
    height="32"
    viewBox="0 0 161 51"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.516 48.144c0 .64-1.376 1.11-4.128 1.408a72.794 72.794 0 0 1-7.84.448c-2.475 0-4.075-.15-4.8-.448-.725-.299-1.088-.768-1.088-1.408V7.568c0-1.11.555-1.899 1.664-2.368 1.11-.47 3.2-.704 6.272-.704H32.34c.896 0 1.344 1.61 1.344 4.832 0 3.221-.203 5.675-.608 7.36-.405 1.685-.928 2.528-1.568 2.528l-12.992-.64v4.352c5.675-.256 9.472-.384 11.392-.384.64 0 1.077.341 1.312 1.024.235.683.352 1.995.352 3.936 0 1.941-.213 3.797-.64 5.568-.427 1.77-1.024 2.656-1.792 2.656l-10.624-.384v12.8zm39.04 2.432c-3.2 0-5.952-.277-8.256-.832a16.956 16.956 0 0 1-6.272-2.944c-3.883-2.816-5.824-8.064-5.824-15.744 0-6.827 1.984-11.712 5.952-14.656 3.712-2.73 8.512-4.096 14.4-4.096 2.517 0 4.672.117 6.464.352 1.792.235 3.616.736 5.472 1.504 1.856.768 3.35 1.813 4.48 3.136 1.13 1.323 2.059 3.147 2.784 5.472.725 2.325 1.088 5.088 1.088 8.288 0 6.485-1.835 11.36-5.504 14.624-3.67 3.264-8.597 4.896-14.784 4.896zm-2.24-12.48c.299 1.536.608 2.453.928 2.752.32.299.747.448 1.28.448s.96-.15 1.28-.448c.32-.299.619-1.216.896-2.752.277-1.536.416-3.467.416-5.792 0-2.325-.053-4.117-.16-5.376-.107-1.259-.235-2.23-.384-2.912-.15-.683-.352-1.216-.608-1.6-.384-.555-.843-.832-1.376-.832-.533 0-.97.16-1.312.48-.341.32-.661 1.259-.96 2.816-.299 1.557-.448 3.765-.448 6.624 0 2.859.15 5.056.448 6.592zm43.2-2.56c0 2.773 1.323 4.16 3.968 4.16 1.536 0 3.541-.523 6.016-1.568s3.776-1.568 3.904-1.568c.81 0 1.877 1.216 3.2 3.648 1.323 2.432 1.984 4.224 1.984 5.376 0 1.664-1.707 2.923-5.12 3.776-3.413.853-6.752 1.28-10.016 1.28-3.264 0-5.995-.256-8.192-.768s-3.99-1.163-5.376-1.952a14.723 14.723 0 0 1-3.648-2.912c-1.045-1.152-1.824-2.25-2.336-3.296a16.357 16.357 0 0 1-1.216-3.488 26.199 26.199 0 0 1-.64-5.824c0-7.765 2.027-13.12 6.08-16.064a18.331 18.331 0 0 1 6.72-3.136c2.475-.597 5.397-.896 8.768-.896 10.795 0 16.192 3.755 16.192 11.264 0 7.979-6.059 11.968-18.176 11.968h-2.112zm-.128-9.344v4.224c1.237 0 2.25-.49 3.04-1.472.79-.981 1.184-2.176 1.184-3.584 0-2.56-.661-3.84-1.984-3.84-1.493 0-2.24 1.557-2.24 4.672zm36.288 24.384c-1.579 0-3.05-.235-4.416-.704-1.365-.47-2.485-1.045-3.36-1.728s-1.632-1.6-2.272-2.752c-.64-1.152-1.13-2.25-1.472-3.296-.341-1.045-.597-2.336-.768-3.872-.256-2.261-.384-4.843-.384-7.744 0-5.93 1.088-10.443 3.264-13.536 2.176-3.093 5.163-4.64 8.96-4.64 3.883 0 6.699.917 8.448 2.752.384.427.683.939.896 1.536h.512l-.768-4.416v-8c0-.939 1.195-1.856 3.584-2.752C149.29.528 151.87.08 154.644.08c2.901 0 4.757.555 5.568 1.664.299.427.448.853.448 1.28v45.44c0 .47-1.184.843-3.552 1.12-2.368.277-4.65.416-6.848.416-2.197 0-3.605-.075-4.224-.224-.619-.15-1.003-.31-1.152-.48-.15-.17-.245-.448-.288-.832l-.512-3.648h-.512a7.415 7.415 0 0 1-2.304 3.776c-1.45 1.323-3.648 1.984-6.592 1.984zm7.168-9.344c.683 0 1.195-.427 1.536-1.28V22.864c0-.427-.224-.757-.672-.992-.448-.235-.843-.352-1.184-.352-1.45 0-2.176 3.328-2.176 9.984 0 3.541.203 6.048.608 7.52.405 1.472 1.035 2.208 1.888 2.208z"
      fill="#efffea"
      fillRule="evenodd"
    />
  </svg>
);

export const LogoContainer = styled('div')`
  padding: 40px;
`;

export const LogoText = styled('div')`
  color: #fff;
`;
