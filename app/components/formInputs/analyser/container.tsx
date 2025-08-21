"use client";

import {
  TextInput as MantinerTextInput,
  type MantineSize,
} from "@mantine/core";
import ActionButton from "../../button/action";
import ActionsGroup from "../../actionGroup";
import { IconCheck, IconFaceIdError, IconSearch } from "@tabler/icons-react";
import styles from "./styles.module.css";
import { FormEvent, useState } from "react";
import { urlRegex } from "@/app/_helpers";
import AnalyserInput, { type UploadStateType } from ".";

interface Props {
  placeholder: string;
}

const AnalyserContainer = ({ placeholder }: Props) => {
  const [uploadState, setUploadState] = useState<{
    state: UploadStateType;
    url: string | null;
  }>({ state: "idle", url: null });
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);

  const handleUpload = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (uploadUrl !== null && urlRegex.test(uploadUrl!)) {
      // setAnalysed(false);
      setUploadState({ state: "uploading", url: uploadUrl });
      setTimeout(() => {
        setUploadState({ state: "success", url: uploadUrl });
        // setAnalysed(true);
      }, 5000);
    } else {
      setUploadState({ state: "error", url: "" });
      // setAnalysed(false);
      setUploadUrl(null);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={(e) => handleUpload(e)}>
        <AnalyserInput
          placeholder={placeholder}
          uploadState={uploadState.state}
          setUploadUrl={(e) => setUploadUrl(e)}
          uploadUrl={uploadUrl}
        />
      </form>
    </>
  );
};

export default AnalyserContainer;
