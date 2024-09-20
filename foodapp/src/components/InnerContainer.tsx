import styles from "./innercontainer.module.css";

//export default function InnerContainer({ children }) {
//  return <div className={styles.innerContainer}>{children}</div>;
//}

export default function InnerContainer<T extends React.ReactNode>(props: {
  children: T;
}) {
  const { children } = props;

  return <div className={styles.innerContainer}>{children}</div>;
}
