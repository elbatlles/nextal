import styles from "./chat.module.css";

export interface PropsChat {
  title: string;
  description: string;
  link: string;
}

const Chat = (props: PropsChat): JSX.Element => {
  // <div className={styles.container}>
  //      <div className={styles.list}>
  //        contenido esquerra
  //      </div>
  //       <div className={styles.containText}>
  //         contenido dreta
  //         </div>
  //         <div className={styles.containWrite}>
  //        escriure
  //         </div>
  //   </div>
  const { title, link, description } = props;
  return (
    <div className={styles.container}>
      <div className={styles.listfriends}>list</div>
      <div className={styles.areachat}>chat</div>
      <div className={styles.areawrite}>
        <textarea />
      </div>
    </div>
  );
};

export default Chat;
