import styles from "./UserInfo.module.scss";
import PersonIcon from "@mui/icons-material/Person";

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className={styles.root}>
      {avatarUrl ? (
        <img className={styles.avatar} src={avatarUrl} alt={fullName} />
      ) : (
        <PersonIcon />
      )}
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
