import styles from "./container.module.css";

// export default function Container( { children }) {
//   return <div className={styles.parentContainer}>{children}</div>;
// }

export default function Container<T extends React.ReactNode>(props: {
  children: T;
}) {
  const { children } = props;
  return <div className={styles.parentContainer}>{children}</div>;
}
