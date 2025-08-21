import {
  TextInput as MantinerTextInput,
  type MantineSize,
} from "@mantine/core";
import ActionButton from "../../button/action";
import ActionsGroup from "../../actionGroup";
import {
  IconCheck,
  IconFaceIdError,
  IconSearch,
  IconUpload,
} from "@tabler/icons-react";
import styles from "./styles.module.css";
import { observer } from "mobx-react-lite";
import analysedStore from "@/app/store/analyserStore";

export type UploadStateType = "idle" | "uploading" | "success" | "error";
interface Props {
  placeholder: string;
  uploadUrl: string | null;
  setUploadUrl: (e: string | null) => void;
  uploadState: UploadStateType;
}

const AnalyserInput = observer(
  ({ placeholder, uploadUrl, setUploadUrl, uploadState }: Props) => {
    return (
      <>
        <MantinerTextInput
          classNames={{
            root: styles.root,
            section: styles.section,
            input: styles.input,
          }}
          variant="filled"
          size="xl"
          radius="md"
          placeholder={placeholder}
          value={uploadUrl || ""}
          onChange={(e) => setUploadUrl(e.target.value)}
          leftSection={<IconSearch />}
          rightSectionWidth="auto"
          rightSection={
            <ActionsGroup>
              {uploadState === "success" ? (
                <>
                  <IconCheck color="white" size={40} />
                  <ActionButton
                    type="button"
                    label="Submit"
                    onClick={() => analysedStore.setAnalysed(true)}
                  />
                </>
              ) : (
                <ActionButton
                  leftSection={<IconUpload />}
                  type="submit"
                  label={
                    uploadState === "uploading" ? "uploading..." : "Upload"
                  }
                />
              )}
            </ActionsGroup>
          }
        />

        {uploadState === "error" && (
          <div className={styles.errorMessage}>
            <IconFaceIdError size={100} />
            <p className="label2">
              Oops!, that URL looks a little odd. Please enter a different one.
            </p>
          </div>
        )}
      </>
    );
  },
);

export default AnalyserInput;
