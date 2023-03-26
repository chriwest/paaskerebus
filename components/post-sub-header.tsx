import { ReactNode } from 'react'
import styles from "../styles/input.module.css";

type Props = {
  quizHeader?: ReactNode
};

const SubHeader = ({ quizHeader }: Props) => {
  return (
    <h3
      className={`text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
    >
      {quizHeader}
    </h3>
  );
};

export default SubHeader;
