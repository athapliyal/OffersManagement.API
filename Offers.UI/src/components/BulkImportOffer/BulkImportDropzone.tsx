import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from 'react-i18next';

export const BulkImportDropzone: React.FC = () => {
  const { t } = useTranslation();

  const onDrop = useCallback((acceptedFiles) => {
    // call API here to upload file
    alert("files dropped");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

  return (
    <div className="col-md-8 col-sm-12">
      <div {...getRootProps({ className: "bulk-import__dropzone" })}>
        <input {...getInputProps()} />
        <h1>{t('DragDropCSV')}</h1>
        <p>Or select a file from your computer</p>
      </div>
    </div>
  );
};
