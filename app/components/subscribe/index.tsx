import Card from "@components/card";
import styles from "./styles.module.css";
import { useState } from "react";
import EmailInput from "../formInputs/email";
import ActionButton from "../button/action";
import { emailRegex } from "@/app/_helpers";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const validateEmail = (e: string) => {
    if (emailRegex.test(e)) {
      setValidEmail(true);
    } else setValidEmail(false);
  };

  const handleSubscribe = () => {
    if (validEmail && email) {
      alert(email);
    } else return;
  };
  return (
    <Card>
      <div className={styles.container}>
        <h3 className="display3 text-white">Sign up to MusiMap</h3>
        <p>
          Sign up to keep up to date with the evolution of our product.
          Including feature releases, improvements, and exclusive updates.
        </p>

        <form onSubmit={() => handleSubscribe()} className={styles.form}>
          <EmailInput
            placeholder="Email"
            value={email}
            onChange={(e) => [validateEmail(e), setEmail(e)]}
          />
          <div>
            {validEmail && <ActionButton label="Submit" type="submit" />}
          </div>
        </form>
      </div>
    </Card>
  );
};

export default Subscribe;
