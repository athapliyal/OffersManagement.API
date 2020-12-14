import { useCallback } from "react";

import { useDropzone } from "react-dropzone";

import "./bulk-import-offer.scss";

export const BulkImportOffer: React.FC = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // call API here to upload file
    alert("files dropped");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

  return (
    <section className="bulk-import__wrapper">
      <div {...getRootProps({ className: "bulk-import__dropzone" })}>
        <input {...getInputProps()} />
        <p>Import CSV file for offers</p>
      </div>
      <div className="bulk-import__instructions">
        <h2>Notes</h2>
      </div>
    </section>
  );
};
